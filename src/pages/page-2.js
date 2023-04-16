import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/seo';

const SecondPage = () => (
  <Layout>
    <div className="min-h-[500px] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl">Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <div className="p-20 text-red-500"><Link to="/">Go back to the homepage</Link></div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage;
