import axios from 'axios'
import {prisma} from "../prisma.js";


export const getTop=async ()=>{
    return prisma.repository.findMany({
        orderBy:[{'stars':'desc'}],
    })
}
export const getBySlug=async (slug)=>{
    return prisma.repository.findFirst({
        where:{
            OR:[
                {name: {contains:slug}},
                {id:+slug||-1},
            ]
        }
    })
}

export const updateList=async()=>{
    let repos = await getTop();
    const apiResponse = await axios.get('https://api.github.com/search/repositories?q=stars:>190000&s=stars&type=repositories&sort=stars&order=desc&per_page=10&page=1').then(({data})=>data);
    for (const item of apiResponse.items) {
        let findedRepository = repos.find(rep=>rep.id===item.id)
        const newRepos = {
            id:item.id,
            name:item.name,
            author:item.owner.login,
            avatar:item.owner.avatar_url,
            description:item.description,
            url:item.html_url,
            stars:item.stargazers_count,
            language:item.language||"Не указано",
        }
        if(findedRepository){//если такой репозиторий уже сохранён, тогда обновить
            await prisma.repository.update({
                where:{id:findedRepository.id},
                data:newRepos
            })
            repos = repos.filter((rep)=> findedRepository!==rep)
        }else{//Иначе добавить
            await prisma.repository.create({data:newRepos});
        }
    }
    await prisma.repository.deleteMany({//Удаляем элементы, которые уже не входят в топ звёздных
            where:{
                id:{
                    in:repos.map(r=>r.id)
                }
            }
        })
}