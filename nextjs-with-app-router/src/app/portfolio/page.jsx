import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

const portfolioItems = [
  {
    id: 1,
    title: 'Illustration',
    image: '/illustration.png',
    url: '/portfolio/illustration'
  },
  {
    id: 2,
    title: 'Websites',
    image: '/websites.jpg',
    url: '/portfolio/websites'
  },
  {
    id: 3,
    title: 'Applications',
    image: '/apps.jpg',
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
            <Image src={item.image} alt={item.title} className={styles.img} width={300} height={300} />
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
