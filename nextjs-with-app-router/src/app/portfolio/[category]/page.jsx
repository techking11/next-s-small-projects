"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import Button from '@/components/button/Button'
import styles from './page.module.css'
import { getData } from '@/utils/blogData';
import Loading from '../Loading';

function page() {
  const { category } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(function () {
    getData(category, setPortfolio);
  }, [category]);

  if (!portfolio) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <h2>{portfolio.title}</h2>
      <div className={`flex ${styles.content}`}>
        <div className={styles.text}>
          <h3>{portfolio.title}</h3>
          <p>{portfolio.description}</p>
          <Button>See More</Button>
        </div>
        <div className={styles.image}>
          <Image src={portfolio.image} alt="Portfolio Image" width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

export default page
