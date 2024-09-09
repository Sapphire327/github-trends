import { FC } from 'react'
import styles from './Repos.module.css'
import RepositoryItem from "../components/RepositoryItem/RepositoryItem.tsx";
const Repository:FC = () => {
    return (
        <div className="container" style={{height:"100%"}}>
            <div className={styles.center}>
                <div className={styles.show}>
                    <RepositoryItem/>
                </div>
            </div>
        </div>
    )
};
export default Repository;
