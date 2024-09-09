import './App.module.css'
import style from './App.module.css'
import RepositoryList from "./components/RepositoryList/RepositoryList.tsx";
import {useEffect, useState} from "react";
import IRepository from "./common/repository.interface.ts";
import {$axios} from "./api.ts";

function App() {
    const [repositories,setRepositories] = useState<IRepository[]>([])
    const getrepos=()=>{
        $axios.get('/getAll').then(({data})=>{
            setRepositories(data)
        })
    }
    const updateRepos=()=>{
        $axios.get('/updateList').then(()=>{
            getrepos();
        })
    }
    useEffect(()=>{
        getrepos();
    },[])



  return (
      <div className='container'>
          <h1 className={style.MainTitle}>Топ популярных репозиториев с github</h1>
          <div className={style.buttonWrapper} onClick={updateRepos}>
              <button className={style.button}>Обновить</button>
          </div>
          <div className={style.show}>
              <RepositoryList repositories={repositories}/>
          </div>
      </div>
  )
}

export default App
