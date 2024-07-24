import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar.js'
import styles from './Comment.module.css'

interface CommentProps {
    content: string
    onDeleteComment: (commentToDelete: string) => void
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeCount = () => {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/typingfe.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Silva</strong>
                            <time title="23 de julho às 23:45" dateTime="2024-07-22 23:45:25">
                                Cerca de 2h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
