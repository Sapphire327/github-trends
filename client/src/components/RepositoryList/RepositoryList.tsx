import {FC} from 'react'
import IRepository from "../../common/repository.interface.ts";
import styles from './Repository.module.css'
import RepositoryItem from "./RepositoryItem.tsx";
const RepositoryList:FC<{repositories:IRepository[]}> = ({repositories}) => {

    return (
        <div className={styles.repositoryListWrapper}>
            <ul className={styles.repositoryList}>
                {
                    repositories.map((item)=><RepositoryItem repository={item}/>)
                }
            </ul>
        </div>
    )
};
export default RepositoryList;