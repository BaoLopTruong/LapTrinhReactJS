import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({children}) {
  return (
    <div>
        <div className={styles.topnav}>
        <Link href="/home">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
      <div>
        {children}
      </div>
 
  </div>
  )
}