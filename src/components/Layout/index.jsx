import React from 'react';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div id="layout" className="overflow-hidden">
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
