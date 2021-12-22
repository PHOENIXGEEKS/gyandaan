import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About';
import Features from '../components/Features';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Gyandaan</title>
        <meta name="description" content="Gyandaan App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="margin-0">
        <About />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
