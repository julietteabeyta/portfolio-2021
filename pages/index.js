import Head from 'next/head'
import anime from 'animejs/lib/anime.es.js';

import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  anime.timeline()
    .add({
      targets: 'svg, #header-logo-container img',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: (el, i) => 600 + 100 * i
    })
    .add({
      targets: '#header-logo-container',
      postition: 'relative',
      width: '100px',
      top: '25px',
      easing: 'easeOutBounce',
      duration: 1000,
    })
    .add({
      targets: '.fade-in',
      opacity: [0,1],
      easing: 'linear',
      duration: 1000,
    });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

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
            <h1 ><span >CREATED WITH PURPOSE AND INTENTION</span></h1>
          </div>
          <div className="section section-3">
            <div>
              <h1><span >Meet us!</span></h1>
              <p>We are <span >Neek and Junie</span> and we are here to make your super neat-o retro
                art dreams come true. Learn more about us and <span>WRWG</span> over here and talk to us here! </p>
            </div>
          </div>
        </div>
      <Footer />
      </main>
    </>
  )
}