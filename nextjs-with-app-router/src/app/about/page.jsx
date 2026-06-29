"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/button/Button'
import styles from './page.module.css'

function About() {
  const router = useRouter();
  return (
    <div className={styles.about}>
      <div className={styles['about-header']}>
        <div className={styles['about-header-text']}>
          <h1>Digital Storytellers</h1>
          <p>Handcrafting award winning digital experiences</p>
        </div>
        <Image className={styles['about-image']} src="https://www.berlinsbi.com/uploads/sites/2/2025/05/Msc-Digital-Marketing.png" alt="Digital Marketing" width={1200} height={300} />
      </div>
      <div className={styles['about-content']}>
        <div className={styles['about-item']}>
          <h2>Who Are We?</h2>
          <p>I am your adaptable AI collaborator, built to help you solve problems, analyze data, and create content efficiently. I combine universal, simple language with deep analytical capabilities to give you clear, direct answers without unnecessary fluff.</p>
          <p>I am your adaptable AI collaborator, built to help you solve problems, analyze data, and create content efficiently. I combine universal, simple language with deep analytical capabilities to give you clear, direct answers without unnecessary fluff.</p>
          <p>I am your adaptable AI collaborator, built to help you solve problems, analyze data, and create content efficiently. I combine universal, simple language with deep analytical capabilities to give you clear, direct answers without unnecessary fluff.</p>
        </div>
        <div className={styles['about-item']}>
          <h2>What We Do?</h2>
          <p>I am your adaptable AI collaborator, built to help you solve problems, analyze data, and create content efficiently. I combine universal, simple language with deep analytical capabilities to give you clear, direct answers without unnecessary fluff.</p>
          <p>I am your adaptable AI collaborator, built to help you solve problems, analyze data, and create content efficiently. I combine universal, simple language with deep analytical capabilities to give you clear, direct answers without unnecessary fluff.</p>
          <p>I am your adaptable AI collaborator, built to help you solve problems, analyze data, and create content efficiently. I combine universal, simple language with deep analytical capabilities to give you clear, direct answers without unnecessary fluff.</p>
          <Button onClick={() => router.push('/contact')}>Contact</Button>
        </div>
      </div>
    </div>
  )
}

export default About
