import Image from 'next/image'
import React from 'react'

import Apps from '../../../../public/apps.jpg'
import styles from './page.module.css'

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elita</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum quisquam illo enim autem vero aliquam, quia inventore distinctio dolor quo odit. Exercitationem sit earum rerum fugit deleniti natus aperiam.</p>
          <div className={styles.imageProfile}>
            <Image src={Apps} alt='Profile' width={50} />
            <span>John Sohh</span>
          </div>
        </div>
        <div className={styles.imageHero}>
          <Image src={Apps} alt='Blog Image' width={500} />
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam temporibus quasi quia voluptatibus iste possimus nobis maiores, nisi eaque minus quas exercitationem veniam debitis vel nihil ab quaerat cum officiis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eius odio numquam placeat vero. Cupiditate soluta velit incidunt nostrum, temporibus eligendi cum enim! Architecto consequuntur aperiam aliquid ut accusantium voluptatibus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum quis voluptas ipsam repudiandae cum velit et consequatur necessitatibus laboriosam. Minima doloremque iste debitis sapiente cumque quaerat unde. Ut, in!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi quod in est ullam. Tempore mollitia laborum voluptates quam maiores fugiat harum inventore, eaque, maxime quidem vel debitis eos aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in quia accusantium sequi voluptatem animi, officia provident minus ab tenetur nam vel numquam soluta fuga eaque dolorum beatae tempore at! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat atque, dolorum eum hic similique corporis dignissimos quae incidunt minus temporibus earum explicabo, tempora maiores, aut eos sit iste voluptates fugit.</p>
    </div>
  )
}

export default BlogPost
