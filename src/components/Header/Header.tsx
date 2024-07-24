import styles from './Header.module.css'

import igniteLogo from '../../assets/Ignite-symbol.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite Logo" />
        </header>
    )
}
