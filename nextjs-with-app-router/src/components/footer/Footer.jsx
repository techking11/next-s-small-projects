import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'
import { socialLinks } from '@/utils/staticData'

function Footer() {
  return (
    <div className={`flex flex-between ${styles.footer}`}>
      <p>&copy; 2026 Lamamia. All rights reserved.</p>
      <div className={`flex ${styles['social-icons']}`}>
        {socialLinks.map((link) => (
          <Link key={link.id} href={link.url} target="_blank">
            <Image src={link.icon} alt={link.name} className={styles.icon} width={25} height={25} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Footer
