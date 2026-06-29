"use client";

import Image from 'next/image'
import { useParams } from 'next/navigation'
import Button from '@/components/button/Button'
import styles from './page.module.css'

function page() {
  const params = useParams();
  return (
    <div className={styles.container}>
      <h2>{params.category}</h2>
      <div className={`flex ${styles.content}`}>
        <div className={styles.text}>
          <h3>Create Portfolio</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis voluptatum nisi eum suscipit, iure perferendis fugiat ea delectus quisquam aperiam distinctio fuga nihil debitis harum? Molestias, quibusdam cum. Perspiciatis?</p>

          <Button>See More</Button>
        </div>
        <div className={styles.image}>
          <Image src="/illustration.png" alt="Portfolio Image" width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

export default page
