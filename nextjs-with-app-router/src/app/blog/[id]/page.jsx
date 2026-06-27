
import Image from 'next/image'
import React from 'react'

import Apps from '../../../../public/apps.jpg'
import styles from './page.module.css'

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/1`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Error in fetch single data')
  }
  return res.json();
}

async function BlogPost({ params }) {
  const blog = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <div className={styles.imageProfile}>
            <Image src={Apps} alt='Profile' width={50} />
            <span>John Sohh</span>
          </div>
        </div>
        <div className={styles.imageHero}>
          <Image src={blog.image} alt='Blog Image' width={300} height={395} />
        </div>
      </div>
      <p>{blog.description}</p>
      <p>{blog.description}</p>
      <p>{blog.description}</p>
    </div>
  )
}

export default BlogPost
