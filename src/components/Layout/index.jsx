import React from 'react';
import Footer from '../Footer';
import ScrollUp from '../ScrollUp';

const Layout = ({ children }) => (
  <div id="layout" className="overflow-hidden">
    {children}
    <Footer />
    <ScrollUp />
  </div>
);

export default Layout;
