import styles from './menu.module.scss';


const Menu = () => {
    return (
        <>
            <ul className={styles['menu-container']}>
                <li className={styles['menu-container__menu-item']}>Showcase</li>
                <li className={styles['menu-container__menu-item']}>Docs</li>
                <li className={styles['menu-container__menu-item']}>Blog</li>
                <li className={styles['menu-container__menu-item']}>Templates</li>
                <li className={styles['menu-container__menu-item']}>Enterprise</li>
            </ul>
        </>
    )
}
export default Menu;