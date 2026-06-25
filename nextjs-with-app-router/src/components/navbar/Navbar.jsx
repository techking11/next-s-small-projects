import Link from 'next/link'
import React from 'react'

import styles from './navbar.module.css'
import Button from '../button/Button'

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
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lamamia
      </Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.name}
          </Link>
        ))}
        <Button style={{ padding: '7px', margin: '0 0px 0 10px' }}>Logout</Button>
      </div>
    </div>
  )
}

export default Navbar
