"use client";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation';

import { getData } from '@/utils/blogData';
import Loading from '../Loading';
import styles from './page.module.css'

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(function () {
    getData(id, setBlog);
  }, [id]);

  if (!blog) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={`flex flex-center ${styles.content}`}>
        <div className={styles.text}>
          <h1>{blog?.title}</h1>
          <p>{blog?.description}</p>
          <div className={styles.imageProfile}>
            <Image src='/apps.jpg' alt='Profile' width={50} height={50} />
            <span>John Sohh</span>
          </div>
        </div>
        <div className={styles.imageHero}>
          <Image src={blog?.image} alt='Blog Image' width={300} height={300} />
        </div>
      </div>
      <p>{blog?.description}</p>
      <p>{blog?.description}</p>
      <p>{blog?.description}</p>
    </div>
  )
}

export default BlogPost
