import React from 'react'
import styles from './page.module.css'

import Link from 'next/link'
import Image from 'next/image'
import Illustration from '../../../public/illustration.png'
import Website from '../../../public/websites.jpg'
import Application from '../../../public/apps.jpg'

const portfolioItems = [
  {
    id: 1,
    title: 'Illustration',
    image: Illustration,
    url: '/portfolio/illustration'
  },
  {
    id: 2,
    title: 'Websites',
    image: Website,
    url: '/portfolio/websites'
  },
  {
    id: 3,
    title: 'Applications',
    image: Application,
    url: '/portfolio/applications'
  },
]

function Portfolio() {
  return (
    <div className={styles.container}>
      <h2>Choose gallery</h2>
      <div className={styles.items}>
        {portfolioItems.map((item) => (
          <Link href={item.url} className={styles.item} key={item.id}>
            <Image src={item.image} alt={item.title} className={styles.img} />
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
