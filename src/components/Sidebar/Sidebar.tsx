import { Avatar } from '../Avatar/Avatar'
import styles from './Sidebar.module.css'
import { PencilSimpleLine } from '@phosphor-icons/react'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/typingfe.png" />

                <strong>Felipe Silva</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    )
}
