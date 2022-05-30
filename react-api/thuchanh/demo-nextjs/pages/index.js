
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
     
        <h1 className={styles.title}>
          <Link href="/user-api/user">
            <a>USer</a>
          </Link>
        </h1>

 
    </div>
  )
}
