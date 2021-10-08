import { Fragment, useEffect, useRef } from 'react';

export default function Introduction() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  useEffect(() => {
    text1.current.innerHTML = text1.current.textContent.replace(/\S/g, "<span class='char'>$&</span>");
    text2.current.innerHTML = text1.current.textContent.replace(/\S/g, "<span class='char'>$&</span>");
  });
  return (
    <div className="introduction-container">
      <div className='header-subtext subtext'>
        <div>
        You're an artist and your canvas is the lives of those you love.
        </div>
      </div>
      <div className='sidetext'>
        <div>
          <p>
            [they / them]
          </p>
        </div>
      </div>
      <div className="header">
        <div>
          <h2 className="header-img-text" ref={ text1 }>Juliette</h2>
          <h2 className="header-img-text" ref={ text2 }>Juliette</h2>
          <img className="header-img" src="juliette.jpeg" alt="Juliette headshot"/>
        </div>
        <div className="about-container">
          <p>
            Juliette is a <span className="full-stack-string">full stack developer</span> based in Los Angeles, California.
            They work on a multidisciplinary team of engineers at EVgo. They're very good
            at <span className="writing-code-string">writing code</span>, bein' a sweetie pie, and cooking vegan food.
          </p>
          <svg className="header-svg arrow" width="188" height="53" viewBox="0 0 188 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M186.5 32.0001C161.803 -7.14034 83.5 -15.0822 1 46.8833M1 46.8833L30.5 51.5M1 46.8833V22.5333" stroke="#86928A" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
}