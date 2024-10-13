import React from 'react';
import styles from '../styles/page.module.scss';
import { useParams } from 'react-router-dom';
import DetailedItem from '../components/itemDetailed/DetailedItem';

const DetailedPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the 'id' parameter from the URL

  return (
    <div className={styles.PageMain}>
      {
        id &&
        <DetailedItem imdbId={id} />
      }
    </div>
  );
};

export default DetailedPage;