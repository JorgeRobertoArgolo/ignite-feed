import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/JorgeRobertoArgolo.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jorge Roberto</strong>
                            <time 
                                title='28 de Outubro as 12h'
                                dateTime='2025-10-28 12:00:30'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, nemo.
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}