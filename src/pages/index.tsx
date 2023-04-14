import Head from 'next/head'

import styles from '@/styles/index.module.scss'
import Image from 'next/image'

import LogoImg from '@/assets/codeleap_logo.png';
import { useEffect } from 'react';
import route from 'next/router';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      route.push('/login');
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Codeleap</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.container}>
        <Image src={LogoImg} alt="logo" />

        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  )
}
