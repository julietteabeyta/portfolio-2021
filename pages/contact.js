import { useEffect } from 'react';
import Head from 'next/head'
import anime from 'animejs';


import Header from '@components/Header'
import Footer from '@components/Footer'
import ArchiveImage from '@components/ArchiveImage'

export default function Archive({ posts }) {
  useEffect(() => {
    anime.timeline().add({
      targets: '.fade-in',
      opacity: [0,1],
      easing: 'linear',
      duration: 0,
    })
  });
  return (
    <>
      <Head>
        <title>Archive | WRWG</title>
      </Head>
      <main>
        <Header />
      </main>
      <Footer />
    </>
  )
}
