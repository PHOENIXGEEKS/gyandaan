import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyandaan</title>
        <meta name="description" content="Gyandaan App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="margin-0">
        <About />
        <Footer />
      </div>
    </div>
  );
}
