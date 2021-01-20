import { useEffect } from 'react';
import Head from 'next/head'
import anime from 'animejs';

import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  useEffect(() => {
    anime.timeline()
      .add({
        targets: 'svg, #header-logo-container img',
        translateY: [50,0],
        translateZ: 0,
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (el, i) => 600 + 100 * i
      })
      .add({
        targets: '.fade-in',
        opacity: [0,1],
        easing: 'linear',
        duration: 1000,
      }, 200);
  });

  return (
    <>
      <Head>
        <title>WRWG</title>
      </Head>
      <main>
        <Header/>
        <div className="content-container fade-in">
          <div className="section section-1">
            <div>
              <p>Creating analog art with a <span>story to tell.</span> Our pieces explore elaborate
                narratives that are great conversation-starters and perfect for compelling home decor.</p>
              <small><span>what rhymes with god</span></small>
            </div>
          </div>
          <div className="section section-2">
            <img src="collage-1.png" alt="Collage 1" className="img-1"></img>
            <img src="collage-2.jpg" alt="Collage 2" className="img-2"></img>
            <img src="collage-3.png" alt="Collage 3" className="img-3"></img>
          </div>
          <div className="section section-3">
            <div>
              <h1><span >Meet us!</span></h1>
              <p>We are <span >Neek & Junie</span> and we are here to make your super neat-o retro
                art dreams come true. Learn more about us and <span>WRWG</span> over {' '}
                <a href="/about">here</a> and talk to us <a href="/contact">here</a>! </p>
            </div>
          </div>
        </div>
      <Footer />
      </main>
    </>
  )
}