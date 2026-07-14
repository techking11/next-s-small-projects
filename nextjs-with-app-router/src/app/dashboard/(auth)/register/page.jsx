import Button from '@/components/button/Button'
import styles from './page.module.css'
import Link from 'next/link'

function Register() {
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form className={styles.form}>
        <input type="text" placeholder="eg: John Doe" />
        <input type="email" placeholder="eg: john.doe@example.com" />
        <input type="password" placeholder="eg: 123456" />
        <Button type="submit">Register</Button>
      </form>
      <p className={styles.loginLink}>Already have an account? <Link href="/dashboard/login">Login</Link></p>
    </div>
  )
}

export default Register
