import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './Post.module.css'

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType {
    id: number
    author: Author
    publishedAt: Date
    content: Content[]
}

interface PostProps {
    post: PostType
}

export const Post = ({ post }: PostProps) => {
    const [comments, setComments] = useState<string[]>([])
    const [newComment, setNewComment] = useState<string>('')

    const publishedDateFormat = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault()

        setComments([...comments, newComment])
        setNewComment('')
    }

    const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    const handleInvalidComment = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo é obrigátorio!')
    }

    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete)

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newComment.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onInvalid={handleInvalidComment}
                    onChange={handleNewCommentChange}
                    value={newComment}
                    placeholder="Deixe um comentário"
                    required
                />

                <footer>
                    <button disabled={isNewCommentEmpty} type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}
