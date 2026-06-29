import Link from 'next/link'

import Button from '../button/Button'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import { links } from '@/utils/staticData'

function Navbar() {
  return (
    <div className={`flex flex-between ${styles.container}`}>
      <Link href="/" className={styles.logo}>
        lamamia
      </Link>
      <div className={`flex flex-center ${styles.nav}`}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.name}
          </Link>
        ))}
        <Button>Logout</Button>
      </div>
    </div>
  )
}

export default Navbar
