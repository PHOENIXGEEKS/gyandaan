import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gyandaan</title>
        <meta name="description" content="Gyandaan App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <div className="margin-0">
        <div id="navbar">
          <div class="shadow-xl h-28 w-full flex justify-between items-center px-20">
            <div id="logo" className="text-xl font-bold">
              mentor<span className="text-red-500 underline">daan.</span>
            </div>
            <div id="auth" className="space-x-12">
              <a
                id="login_btn"
                href="/auth"
                className="border-2 border-red-500 bg-red-500 px-8 py-2 rounded-full text-white"
              >
                Login
              </a>
              <a
                id="signup_btn"
                href="/auth"
                className="border-2 border-red-500 px-8 py-2 rounded-full text-red-500"
              >
                Join for Free
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div id="footer" className="">
          <div className="shadow-xl w-auto height-auto p-20 flex flex-col items-center space-y-8">
            <div
              id="footer_links"
              className="font-semibold space-x-16 underline"
            >
              <a href="#" className="">
                Need a Mentor?
              </a>
              <a href="#" className="">
                Be a Mentor?
              </a>
              <a href="#" className="">
                How it Works?
              </a>
              <a href="#" className="">
                About Us
              </a>
            </div>
            <div>contact@mentordaan.io</div>
            <div id="footer_socials" className="flex space-x-8">
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
              >
                f
              </a>
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
              >
                L
              </a>
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
              >
                I
              </a>
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
              >
                Y
              </a>
              <a
                href="#"
                className="h-14 w-14 rounded-full bg-red-500 flex justify-center items-center text-white"
              >
                E
              </a>
            </div>
            <div>&copy; Copyright 2021, mentordaan. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
