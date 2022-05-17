import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'

export default function Login() {
  const router = useRouter()
  return (
    <div class={styles.wrapper}>
      <div class={styles.formContent}>
        <h2>Login</h2>
        <form>
          <input class={styles.input} type="text" id="login" name="login" placeholder="login" />
          <input class={styles.input} type="text" id="password" name="login" placeholder="password" />
          <button type="button" class={styles.button} onClick={() => router.push('/')}>Log In</button>
        </form>
      </div>
    </div>
  )
}