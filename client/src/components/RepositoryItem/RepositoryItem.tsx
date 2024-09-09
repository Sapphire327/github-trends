import {FC, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import styles from './repository.module.css'
import IRepository from "../../common/repository.interface.ts";
import {$axios} from "../../api.ts";

const RepositoryItem: FC = () => {
    const params = useParams();
    const [repository, setRepository] = useState<IRepository>()
    useEffect(() => {
        $axios.get('/getBySlug', {params: {slug: params.id}}).then(({data}) => {
            setRepository(data)
        })
        console.log()
    }, [])
    return (
        repository &&
        <div className={styles.itemWrapper}>
            <div className={styles.item}>
                <div className={styles.author}>
                    <img className={styles.avatar} src={repository.avatar} alt="avatar"/>
                    <p className={styles.authorName}>{repository.author}</p>
                </div>
                <div className={styles.repositoryInfo}>
                    <div className={styles.repositoryRow}>
                        <p className={styles.repositoryLabel}>Id на гитхабе:</p>
                        <p className={styles.repositoryValue}>{repository.id}</p>
                    </div>
                    <div className={styles.repositoryRow}>
                        <p className={styles.repositoryLabel}>Название:</p>
                        <p className={styles.repositoryValue}>{repository.name}</p>
                    </div>
                    <div className={styles.repositoryRow}>
                        <p className={styles.repositoryLabel}>Ссылка гитхаба:</p>
                        <p className={styles.repositoryValue}><a target="_blank" href={repository.url}>{repository.url}</a></p>
                    </div>
                    <div className={styles.repositoryRow}>
                        <p className={styles.repositoryLabel}>Описание:</p>
                        <p className={styles.repositoryValue}>{repository.description}</p>
                    </div>
                    <div className={styles.repositoryRow}>
                        <p className={styles.repositoryLabel}>Язык:</p>
                        <p className={styles.repositoryValue}>{repository.language}</p>
                    </div>
                    <p className={styles.stars}>{repository.stars}★</p>
                </div>
            </div>
        </div>
    )
};
export default RepositoryItem