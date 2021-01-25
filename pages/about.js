
import Layout from 'layouts/layout';

export default function Home() {
  return (
    <Layout>
      <div className="about-section">
        <div className="about-header">
          <p><span>What Rhymes With God</span> is a collage studio based out of Denver, Colorado and Los Angeles, California.
          We are in the process of building our business and brand, all while creating beautiful, meaningful pieces perfect for
          home decoration, gift-giving, and personal & political expression.</p>
        </div>
        <div className="about-container">
          <div>
            <img src="neek.jpg" alt="Selfie of Neek" />
            <h3 className="name-header"><span>Neek Abeyta</span></h3>
            <p className="name-subheader">(she/her)</p>
            <p className="name-subheader">Collage Artist</p>
            <p>Neek operates out of Denver as the designer and curator all of the art produced here.
            She intends to be loud and unapologetic about the messages depicted in our pieces and hopes to achieve all of your collaging hopes and dreams.
            When she is not collaging, Neek is either at work for Planned Parenthood, going on mountain adventures, or antiquing her little heart out. She is also
            the loving mother of the world's biggest nuisance of a cat called Nano.</p>
            <a href="https://www.instagram.com/saintneeek/?hl=en" target="_blank"><img src="instagram-logo.png" alt="instagram logo" /></a>
            <a href="https://twitter.com/neeekromancer" target="_blank"><img src="twitter-logo.png" alt="twitter logo" /></a>
          </div>
          <div>
            <img src="junie.jpg" alt="Selfie of Junie" />
            <h3 className="name-header"><span>Juliette "Juneau" Spencer</span></h3>
            <p className="name-subheader">(they/she)</p>
            <p className="name-subheader">Everything Else</p>
            <p>Junie is a Los Angeles-based full-time software engineer & sweetie pie who handles
            all of the merch design and business management for WRWG. They have a passion for creative operation in myriad mediums and work to add 
            dimension to the functions of this studio. Outside of slinging code, Junie enjoys reading, cooking good vegan food, and dabbling in piano playing.</p>
            <a href="https://www.instagram.com/juneauwhoa/?hl=en" target="_blank"><img src="instagram-logo.png" alt="instagram logo" /></a>
            <a href="https://www.juliette.dev/" target="_blank"><img style={{ filter: 'invert(1)' }} src="website-logo.png" alt="world wide web icon" /></a>

          </div>
        </div>
      </div>
    </Layout>
  );
}