import Navbar from './Navbar';
import React from 'react';
import '../assets/scss/styles.scss';

const Layout = props => (
  <div>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
