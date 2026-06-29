import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import { getAllData } from '@/utils/blogData'

async function Portfolio() {
  const porfolioItems = await getAllData();
  return (
    <div className={styles.container}>
      <h2>Choose gallery</h2>
      <div className={styles.items}>
        {porfolioItems.map((item) => (
          <Link href={`/portfolio/${item.id}`} className={styles.item} key={item.id}>
            <Image src={item.image} alt={item.title} className={styles.img} width={300} height={300} />
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
