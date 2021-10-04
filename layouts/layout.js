import Footer from '@components/Footer'
import Transition from '@components/Transition';
import Head from 'next/head'
import { Fragment } from 'react';


const Layout = ({ children, location }) => {
  return (
    <Fragment>
      <Head>
        <title>Juliette</title>
      </Head>
      {/* <div className="blm"><a href="https://secure.actblue.com/donate/ms_blm_homepage_2019"><span>BLACK LIVES MATTER</span></a> {' '} NO JUSTICE, NO PEACE.</div> */}
      <main>
          <Transition location={location}>
            {children}
          </Transition>
      </main>
      <Footer />
    </ Fragment>
  )
}

export default Layout
