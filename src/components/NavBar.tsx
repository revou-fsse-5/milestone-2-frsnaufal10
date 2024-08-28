import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        Home
      </Link>
      <Link to="/login" style={styles.link}>
        Login
      </Link>
      <Link to="/register" style={styles.link}>
        Register
      </Link>
      <Link to="/cart" style={styles.link}>
        Cart
      </Link>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#282c34',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default NavBar;
