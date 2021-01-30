import React, { memo } from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by Shant Sargsyan for interview in
      <a
        href="https://brainstormtech.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Brainstorm Technologies
      </a>
    </footer>
  );
};

export default memo(Footer);
