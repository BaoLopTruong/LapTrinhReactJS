import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.container}>
    <h1> Begin Layout</h1>
    {children}
    <h1> End Layout</h1>
  </div>;
}