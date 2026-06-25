import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'
import Facebook from '../../../public/1.png'
import Instragram from '../../../public/2.png'
import Twitter from '../../../public/3.png'
import Youtube from '../../../public/4.png'

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/lamamia"
  },
  {
    id: 2,
    name: "Instagram",
    icon: Instragram,
    url: "https://www.instagram.com/lamamia"
  },
  {
    id: 3,
    name: "Twitter",
    icon: Twitter,
    url: "https://www.twitter.com/lamamia"
  },
  {
    id: 4,
    name: "Youtube",
    icon: Youtube,
    url: "https://www.youtube.com/lamamia"
  }
]

function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; 2026 Lamamia. All rights reserved.</p>
      <div className={styles['social-icons']}>
        {socialLinks.map((link) => (
          <Link key={link.id} href={link.url} target="_blank">
            <Image src={link.icon} alt={link.name} className={styles.icon} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer
