import React from 'react';
import Header from './Header';

const Root = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Root;
