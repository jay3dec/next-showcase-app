import Image from 'next/image'
import styles from './page.module.css'
import Menu from './components/Menu/Menu'
import Logo from './components/Logo/Logo'
import Search from './components/Search/Search'
import ActionButtons from './components/ActionButtons/ActionButtons'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          <Menu />
        </nav>
        <Search />
        <ActionButtons/> 
      </header>

      <section>

      </section>
      <footer>

      </footer>
    </main>
  )
}
