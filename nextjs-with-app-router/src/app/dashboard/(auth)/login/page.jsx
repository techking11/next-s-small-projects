import Button from '@/components/button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Login() {
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form className={styles.form}>
        <input type="text" placeholder="eg: John Doe" />
        <input type="password" placeholder="eg: 123456" />
        <Button type="submit">Login</Button>
      </form>
      <button className={styles.googleLogin}>
        <Image src="https://img.icons8.com/color/1200/google-logo.jpg" alt="Google" width={20} height={20} />
      </button>

      <p className={styles.register}>Don't have an account? <Link href="/dashboard/register">Register</Link></p>
    </div>
  )
}

export default Login
