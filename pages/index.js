import { useEffect, useRef } from 'react';

import Layout from 'layouts/layout';
import Introduction from 'components/Introduction';
import Projects from 'components/Projects';

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <Projects />
    </Layout>
  );
}