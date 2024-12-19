import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/home" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/aboutme" style={styles.link}>About Me</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/projects" style={styles.link}>Projects</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '1rem',
    position: 'fixed', // Make the navbar fixed at the top
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10, // Ensure navbar stays on top of carousel
    backgroundColor: 'transparent', // Make sure background is transparent
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
};

export default Navbar;
