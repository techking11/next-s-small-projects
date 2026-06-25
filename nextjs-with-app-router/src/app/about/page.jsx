import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

function About() {
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam.</p>
        </div>
        <div className={styles['about-item']}>
          <h2>What We Do?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam.</p>
          <Button style={{ padding: '10px', fontSize: '16px' }}>Contact</Button>
        </div>
      </div>
    </div>
  )
}

export default About
