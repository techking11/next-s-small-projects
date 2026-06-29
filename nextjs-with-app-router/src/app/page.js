import Image from 'next/image';
import Button from '@/components/button/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={`flex flex-between ${styles.container}`}>

      <div className={styles.content}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>
          Turning your idea into reality. We bring together the teams from the global tech industry.
        </p>
        <Button>See Our Works</Button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src='/hero.png'
          alt="Lamamia Hero"
          className={styles.image}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
