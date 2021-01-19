import Head from 'next/head'

import { getcontent } from '@utils/getcontent'

import Header from '@components/Header'
import Footer from '@components/Footer'
import ArchiveImage from '@components/ArchiveImage'

export default function Archive({ posts }) {
  console.log('what are our posts ', posts);
  return (
    <div className="container">
      <Head>
        <title>Archive | WRWG</title>
      </Head>
      <main>
        <Header />
        <div className="posts">
          {posts.map((p) => {
            return <ArchiveImage key={p.date} date={p.date} image={p.image.fields} title={p.title} />
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