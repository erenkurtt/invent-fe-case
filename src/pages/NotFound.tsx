import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/page.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.PageMain}>
      <div className={styles.notFoundPage}>
        <h1>Page Not Found</h1>
        <Link to="/">Go to Main Page</Link>
      </div>
    </div>
  );
};

export default NotFound;