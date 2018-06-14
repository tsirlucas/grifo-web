import React from 'react';

export const Header = () => (
  <div style={styles.header}>
    <span style={styles.text}>Talk to us</span>
  </div>
);

export const styles = {
  header: {
    display: 'flex',
    flex: 1,
    paddingLeft: 20,
    maxHeight: 70,
    minHeight: 70,
    flexDirection: 'column',
    backgroundColor: '#26AADB',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
};
