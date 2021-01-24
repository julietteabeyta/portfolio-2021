import { getcontent } from '@utils/getcontent'
import anime from 'animejs';

import ArchiveImage from '@components/ArchiveImage'
import Layout from 'layouts/layout';
import { Fragment, useEffect, useState } from 'react';

export default function Archive({ posts }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
    anime.timeline()
      .add({
        targets: '.collage',
        opacity: [0,1],
        easing: 'easeInExpo',
        duration: 800,
        delay: (el, i) => 600
      });
  });

  return (
    <Layout>
      <div className="posts">
        {windowWidth < 768
          && <Fragment>
            <div>
              {posts.map((p, index) => {
                if (index%2 === 0) {
                  return <ArchiveImage key={index} date={p.date} image={p.image.fields} title={p.title} />
                }
              })}
            </div>
            <div>
              {posts.map((p, index) => {
                if (index%2 !== 0) {
                  return <ArchiveImage key={index} date={p.date} image={p.image.fields} title={p.title} />
                }
              })}
            </div>
          </Fragment>
        }
        {windowWidth > 768
          && <Fragment>
            <div>
              {posts.map((p, index) => {
                if (index%3 === 0) {
                  return <ArchiveImage key={index} date={p.date} image={p.image.fields} title={p.title} />
                }
              })}
            </div>
            <div>
              {posts.map((p, index) => {
                if (index%3 !== 0 && index%2 === 0) {
                  return <ArchiveImage key={index} date={p.date} image={p.image.fields} title={p.title} />
                }
              })}
            </div>
            <div>
              {posts.map((p, index) => {
                if (index%3 !== 0 && index%2 !== 0) {
                  return <ArchiveImage key={index} date={p.date} image={p.image.fields} title={p.title} />
                }
              })}
            </div>
          </Fragment>
        }
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