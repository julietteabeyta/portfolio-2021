import { useEffect, useRef } from 'react';

import Layout from 'layouts/layout';
import Introduction from 'components/Introduction';

export default function Home() {
  return (
    <Layout>
      <Introduction />
    </Layout>
  );
}