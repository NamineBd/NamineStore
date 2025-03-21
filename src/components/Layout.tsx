import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;