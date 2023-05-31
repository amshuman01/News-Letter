import React from 'react';
import styles from '../styles/Style.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.line} ${styles.orange}`}></div>
      <div>Applications are open for YC Summer 2023</div>
      <div>
        <a href="newsguidelines.html">Guidelines</a> |{' '}
        <a href="newsfaq.html">FAQ</a> | <a href="lists">Lists</a> |{' '}
        <a href="https://github.com/HackerNews/API">API</a> |{' '}
        <a href="security.html">Security</a> |{' '}
        <a href="https://www.ycombinator.com/legal/">Legal</a> |{' '}
        <a href="https://www.ycombinator.com/apply/">Apply to YC</a> |{' '}
        <a href="mailto:hn@ycombinator.com">Contact</a>
      </div>
      <label>
        Search:
        <input></input>
      </label>
    </div>
  );
};

export default Footer;
