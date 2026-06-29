import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'


async function getAllData() {
  const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error("Error in fetching all data");
  }
  const data = await res.json();
  return data;
}

async function Blog() {

  const blogItems = await getAllData();

  return (
    <div className={styles.container}>
      {blogItems.map((item) => (
        <Link href={`/blog/${item.id}`} className={`flex flex-center ${styles.content}`} key={item.id}>
          <div className={styles.imageContainer}>
            <Image src={item.image} alt={`Blog ${item.id}`} width={250} height={250} />
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
