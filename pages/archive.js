import { useEffect } from 'react';
import Head from 'next/head'
import anime from 'animejs';

import { getcontent } from '@utils/getcontent'

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
    .add({
      targets: '.posts',
      opacity: [0,1],
      easing: 'linear',
      duration: 1000,
    });
  });
  return (
    <div className="container">
      <Head>
        <title>Archive | WRWG</title>
      </Head>
      <main>
        <Header />
        <div className="posts">
          {posts.map((p, index) => {
            return <ArchiveImage key={index} date={p.date} image={p.image.fields} title={p.title} />
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await getcontent()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}