import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>Error 404</h1>
      <div>This page not found</div>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};

export default NotFound;
