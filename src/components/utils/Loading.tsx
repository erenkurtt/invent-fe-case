import React from 'react';
import styles from '../../styles/loading.module.scss';

const Loading: React.FC = () => {
  return (
    <div>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loading;