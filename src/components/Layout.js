import React from 'react';
import PropTypes from 'prop-types';
import {Header, styles as headerStyles} from './Header';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    maxHeight: `calc(100vh - ${headerStyles.header.maxHeight}px`,
  },
};

export const Layout = ({children}) => (
  <div id="layout" style={styles.container}>
    <Header />
    <div style={styles.body}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
