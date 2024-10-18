import Layout from 'layouts/layout';
import Introduction from 'components/Introduction';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

export default function Home() {
  return (
    <Layout>
      <Introduction />
      {/* <Projects /> */}
      <Contact />
    </Layout>
  );
}