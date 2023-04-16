import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <div className="min-h-[500px] flex items-center justify-center">
      <h1 className="text-2xl">404: Страница не найдена</h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage;
