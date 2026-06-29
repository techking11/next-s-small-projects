import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: "/1.png",
    url: "https://www.facebook.com/lamamia"
  },
  {
    id: 2,
    name: "Instagram",
    icon: "/2.png",
    url: "https://www.instagram.com/lamamia"
  },
  {
    id: 3,
    name: "Twitter",
    icon: "/3.png",
    url: "https://www.twitter.com/lamamia"
  },
  {
    id: 4,
    name: "Youtube",
    icon: "/4.png",
    url: "https://www.youtube.com/lamamia"
  }
]

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
