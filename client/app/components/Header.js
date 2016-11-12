import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const headerStyle = {
  position: 'fixed',
};

const Header = () => (
  <AppBar
    title={<span style={{cursor: 'pointer'}}>Schedule Me</span>}
    showMenuIconButton={false}
    style={headerStyle}
  />
);

export default Header;
