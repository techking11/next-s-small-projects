"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Apps from '../../../../public/apps.jpg'
import styles from './page.module.css'
import { useParams } from 'next/navigation';
import Loading from '../Loading';

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(function () {


    const getData = async function (id) {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' });
      if (!res.ok) {
        throw new Error('Error in fetch single data')
      }
      const data = await res.json();
      setBlog(data);
    }

    getData(id);

  }, [id]);

  if (!blog) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>{blog?.title}</h1>
          <p>{blog?.description}</p>
          <div className={styles.imageProfile}>
            <Image src={Apps} alt='Profile' width={50} />
            <span>John Sohh</span>
          </div>
        </div>
        <div className={styles.imageHero}>
          <Image src={blog?.image} alt='Blog Image' width={300} height={395} />
        </div>
      </div>
      <p>{blog?.description}</p>
      <p>{blog?.description}</p>
      <p>{blog?.description}</p>
    </div>
  )
}

export default BlogPost
