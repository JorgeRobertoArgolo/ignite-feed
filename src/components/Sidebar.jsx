import styles from './Sidebar.module.css'
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from './Avatar'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=50&w=500" 
                alt="Capa do perfil" 
            />

            <div className={styles.profile}>

            <Avatar 
                src="https://avatars.githubusercontent.com/u/160530109?v=4" 
            />

                <strong>Jorge Roberto</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}