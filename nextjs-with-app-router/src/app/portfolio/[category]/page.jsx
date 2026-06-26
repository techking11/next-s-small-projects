"use client";

import Button from '@/components/button/Button'
import React from 'react'
import Image from 'next/image'
import Illustration from '../../../../public/illustration.png'
import styles from './page.module.css'
import { useParams } from 'next/navigation'

function page() {
  const params = useParams();
  return (
    <div className={styles.container}>
      <h2>{params.category}</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Create Portfolio</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis voluptatum nisi eum suscipit, iure perferendis fugiat ea delectus quisquam aperiam distinctio fuga nihil debitis harum? Molestias, quibusdam cum. Perspiciatis?</p>
          
          <Button style={{ padding: '15px 20px', fontSize: '16px' }}>See More</Button>
        </div>
        <div className={styles.image}>
          <Image src={Illustration} alt="Portfolio Image" />
        </div>
      </div>
    </div>
  )
}

export default page
