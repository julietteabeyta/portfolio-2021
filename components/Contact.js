import { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom'

export default function Introduction() {
  return (
    <Fragment>
      <div className="contact-container">
        <div className='contact-subtext subtext'>
          <div>
            Contact
          </div>
        </div>
      <div className="contact-cta">
        I am a delight to talk to! Please reach out (I'm most active on Twitter)!
      </div>
      <div className="contact-method-container">
        <div className="contact-method contact-twitter">
          <p>TW</p>
          <p>@julietteabeyta</p>
          <a href="https://twitter.com/julietteabeyta" target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 2H0.707107V0H12.7071V12H10.7071V3.41421L1.41421 12.7071L0 11.2929L9.29289 2Z" fill="#86928A"/>
            </svg>
          </a>
        </div>
        <div className="contact-method contact-linkedin">
          <p>IN</p>
          <p>/in/juliette-abeyta-90b761162/</p>
          <a href="https://linkedin.com/in/juliette-abeyta-90b761162/" target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 2H0.707107V0H12.7071V12H10.7071V3.41421L1.41421 12.7071L0 11.2929L9.29289 2Z" fill="#86928A"/>
            </svg>
          </a>
        </div>
        <div className="contact-method contact-github">
          <p>GH</p>
          <p>@julietteabeyta</p>
          <a href="https://github.com/julietteabeyta" target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 2H0.707107V0H12.7071V12H10.7071V3.41421L1.41421 12.7071L0 11.2929L9.29289 2Z" fill="#86928A"/>
            </svg>
          </a>
        </div>
        <div className="contact-method contact-codepen">
          <p>CP</p>
          <p>@julietteabeyta</p>
          <a href="https://codepen.com/julietteabeyta" target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 2H0.707107V0H12.7071V12H10.7071V3.41421L1.41421 12.7071L0 11.2929L9.29289 2Z" fill="#86928A"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </Fragment>
  );
}