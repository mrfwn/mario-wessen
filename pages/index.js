import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mário Wessen Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Sorry, I'm still building my portfolio - <a href="https://www.linkedin.com/in/m%C3%A1rio-wessen-7b3a57119">Mário Wessen!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/m%C3%A1rio-wessen-7b3a57119" className={styles.card}>
            <h3> My Linkedin</h3>
          </a>

          <a href="https://github.com/mrfwn" className={styles.card}>
            <h3>My GitHub</h3>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/m%C3%A1rio-wessen-7b3a57119"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Me ❤
        </a>
      </footer>
    </div>
  )
}
