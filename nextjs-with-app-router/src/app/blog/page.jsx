import React from 'react'

import styles from './page.module.css'
import Image from 'next/image'

import Illustrations from '../../../public/illustration.png'
import Websites from '../../../public/websites.jpg'
import Apps from '../../../public/apps.jpg'
import Link from 'next/link'

const blogItems = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error consequatur! Odit, laborum consequuntur nam dignissimos iusto blanditiis sit cumque temporibus eveniet voluptas iure laboriosam nemo officiis sint officia esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab aspernatur voluptatibus, incidunt quae porro adipisci dolor voluptatem quo officiis, ratione dolore possimus quam id doloribus pariatur vitae totam ex.",
    image: Websites

  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error consequatur! Odit, laborum consequuntur nam dignissimos iusto blanditiis sit cumque temporibus eveniet voluptas iure laboriosam nemo officiis sint officia esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab aspernatur voluptatibus, incidunt quae porro adipisci dolor voluptatem quo officiis, ratione dolore possimus quam id doloribus pariatur vitae totam ex.",
    image: Illustrations
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error consequatur! Odit, laborum consequuntur nam dignissimos iusto blanditiis sit cumque temporibus eveniet voluptas iure laboriosam nemo officiis sint officia esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab aspernatur voluptatibus, incidunt quae porro adipisci dolor voluptatem quo officiis, ratione dolore possimus quam id doloribus pariatur vitae totam ex.",
    image: Apps
  }
]

function Blog() {
  return (
    <div className={styles.container}>
      {blogItems.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.content} key={item.id}>
          <div className={styles.imageContainer}>
            <Image src={item.image} alt={`Blog ${item.id}`} />
          </div>
          <div className={styles.text}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
