import Link from 'next/link'

import Button from '../button/Button'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'

const links = [
  {
    id: 1,
    name: "Home",
    url: "/"
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 3,
    name: "Blog",
    url: "/blog"
  },
  {
    id: 4,
    name: "About",
    url: "/about"
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    name: "Dashboard",
    url: "/dashboard"
  }
]

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
