import Layout from 'layouts/layout';

export default function Contact() {
  return (
    <Layout>
      <div className="contact-section">
        <div className="contact-header">
          <h1><span>Let's Chat</span></h1>
        </div>
        <div className="contact-subsection">
          <h1><span>Email</span></h1>
          <a href="mailto:hello@whatrhymeswithgod.com"><h3>hello@whatrhymeswithgod.com</h3></a>
          <h1><span>Instagram</span></h1>
          <a href="https://www.instagram.com/whatrhymeswithgod/?hl=en"><h3>whatrhymeswithgod</h3></a>
        </div>
      </div>
    </Layout>
  )
}
