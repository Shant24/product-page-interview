import React, { memo } from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Created by Shant Sargsyan for interview in</span>
        <a
          href="https://brainstormtech.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brainstorm Technologies
        </a>
      </div>
    </footer>
  );
};

export default memo(Footer);
