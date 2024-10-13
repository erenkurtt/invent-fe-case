import React from 'react';
import styles from '../../../styles/itemDashboard.module.scss';
import { ItemDetails } from '../../../api/apiInterface';
import { Link } from 'react-router-dom';

interface BoardItemProps {
  boardItem: ItemDetails;
}

const BoardItem: React.FC<BoardItemProps> = ({boardItem}) => {
  return (
    <div className={styles.main}>
      <div className={styles.leftPoster}>
        <Link to={`/item/${boardItem.imdbID}`}>
        <img className={styles.poster} src={boardItem.Poster}></img>
        </Link>
      </div>
      <div className={styles.rightDetails}>
        <Link to={`/item/${boardItem.imdbID}`}>
          <h2 className={styles.title}>{boardItem.Title}</h2>
        </Link>
        <div className={styles.detailsMain}>
            <span className={styles.detailsMainItem}>{boardItem.Year}</span>
            <span className={styles.detailsMainItem}>{boardItem.Runtime}</span>
            <span className={styles.detailsMainItem}>{boardItem.Genre}</span>
        </div>
        <p className={styles.details}>{boardItem.Language}</p>
        <p className={styles.details}>{boardItem.imdbRating} <span>{`(${boardItem.imdbVotes})`}</span></p>
        <p className={styles.details}>{boardItem.imdbID}</p>
      </div>
    </div>
  );
};

export default BoardItem;