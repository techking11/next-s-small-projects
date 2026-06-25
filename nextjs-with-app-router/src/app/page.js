import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import HeroImage from '../../public/hero.png'; // need to solve this path
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>
          Turning your idea into reality. We bring together the teams from the global tech industry.
        </p>
        <Button style={{ padding: '15px', fontSize: '14px' }}>See Our Works</Button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={HeroImage}
          alt="Lamamia Hero"
          className={styles.image}
          width={600}
        />
      </div>
    </div>
  );
}
