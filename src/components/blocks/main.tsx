import styles from "./main.module.css";
import {PropsWithChildren} from 'react';

interface MainProps {
    progress: number
}

const Main = (props: PropsWithChildren<MainProps>) => {
    return <main className={styles.main}>
        <div className={styles.progress} style={{width: `${props.progress}%`}}></div>
        {props.children}
    </main>
}

export default Main;