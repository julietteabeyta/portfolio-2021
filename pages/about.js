
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
            <p><span>Neek</span> is operating out of Denver as the designer and curator all of the art produced here.
            She intends to be loud and unapologetic about the messages depicted in our pieces and hopes to achieve all of your collaging hopes and dreams.
            When she is not collaging, Neek is either at work for Planned Parenthood, going on mountain adventures, or antiquing her little heart out. She is also
            the loving mother of the world's biggest nuisance of a cat called Nano.</p>
          </div>
          <div>
            <img src="junie.jpg" alt="Selfie of Junie" /><p><span>Junie </span> is a Los Angeles-based full-time software engineer & sweetie pie who handles
            all of the merch design and business management for WRWG. They have a passion for creative operation in myriad mediums and function to add 
            dimension to the functions of this studio. Outside of slinging code, Junie enjoys reading, cooking good vegan food, and dabbling in piano playing.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}