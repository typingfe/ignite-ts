import { Header } from './components/Header/Header'
import { Post, PostType } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/typingfe.png',
            name: 'Felipe Silva',
            role: 'Web @Developer-Student',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],

        publishedAt: new Date('2024-07-20 18:00:00'),
    },

    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/revogabe.png',
            name: 'Daniel Gabriel',
            role: 'Web @Developer',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],

        publishedAt: new Date('2024-07-23 10:00:00'),
    },
    {
        id: 3,
        author: {
            avatarUrl: 'https://github.com/larafelp.png',
            name: 'Lara Felipe',
            role: 'Bio @Medicine',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],

        publishedAt: new Date('2024-07-23 18:00:00'),
    },
]

export const App = () => {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>

                <main>
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </main>
            </div>
        </div>
    )
}
