import Image from 'next/image'
import Button from '@/components/button/Button'
import styles from './contact.module.css'

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1><span>L</span><span className={styles.gradientText}>et's Keep in Touch</span></h1>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" width={500} height={500} />
        </div>
        <div className={styles.contact}>
          <form action="">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <Button>Send</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
