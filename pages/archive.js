import { getcontent } from '@utils/getcontent'

import ArchiveImage from '@components/ArchiveImage'
import Layout from 'layouts/layout';

export default function Archive({ posts }) {
  return (
    <Layout>
      <div className="posts">
        {posts.map((p, index) => {
          return <ArchiveImage key={index} date={p.date} image={p.image.fields} title={p.title} />
        })}
      </div>
    </Layout>
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