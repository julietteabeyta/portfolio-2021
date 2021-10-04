import { useEffect, useRef } from 'react';

import Layout from 'layouts/layout';

export default function Home() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  useEffect(() => {
    text1.current.innerHTML = text1.current.textContent.replace(/\S/g, "<span class='char'>$&</span>");
    text2.current.innerHTML = text1.current.textContent.replace(/\S/g, "<span class='char'>$&</span>");
  });
  return (
    <Layout>
      <div className="header">
        <div>
          <h2 className="header-img-text" ref={ text1 }>Juliette</h2>
          <h2 className="header-img-text" ref={ text2 }>Juliette</h2>
          <img className="header-img" src="juliette.jpeg" alt="Juliette headshot"/>
        </div>
        <div>
          <p>
            Juliette Spencer is a full stack developer based in Los Angeles, California.
            They work on a multidisciplinary team of engineers at EVgo. They're very good
            at writing code, bein' a sweetie pie, and cooking vegan food. 
          </p>
        </div>
      </div>
    </Layout>
  );
}