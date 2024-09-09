import { FC } from 'react'
import IRepository from "../../common/repository.interface.ts";
import styles from "./Repository.module.css";
import {Link} from "react-router-dom";

const RepositoryItem:FC<{ repository:IRepository }> = ({repository}) => {
    return (
        <div className={styles.repository}>
            <div className={styles.author}>
                <p className={styles.authorName}>{repository.author}</p>
                <img className={styles.avatar} src={repository.avatar} alt="avatar"/>
            </div>
            <div className={styles.repositoryInfo}>
               <p className={styles.repositoryName}> {repository.name}</p>
                <p className={styles.repositoryDescription}>{repository.description}</p>
            </div>
            <div className={styles.repositoryLinkWrapper}>
                <Link to={`/repository/${repository.id}`}>Подробнее</Link>
            </div>
        </div>
    )
};
export default RepositoryItem;