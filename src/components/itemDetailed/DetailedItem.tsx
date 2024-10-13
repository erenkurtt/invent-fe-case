import React, {useEffect, useState} from 'react';
import styles from '../../styles/itemDetailed.module.scss';
import { getItemById } from '../../api/apiCalls';
import { ItemDetails } from '../../api/apiInterface';
import { CiStar } from "react-icons/ci";
import ListSeasons from './series/ListSeasons';

interface DetailedItemProps {
  imdbId: string;
}

const DetailedItem: React.FC<DetailedItemProps> = ({imdbId}) => {
  const [detailedItem, setDetailedItem] = useState<ItemDetails>();
  
  useEffect(() => {
    const getDetailedItem = async () => {
      const response = await getItemById(imdbId);
      setDetailedItem(response);
    }
    getDetailedItem();
  }, []);
  
    
  return (
    <div>
      {
        detailedItem ?
        <div className={styles.detailedMain}>
          <div className={styles.detailedTopSide}>
            <div className={styles.detailedTopLeft}>
              <h2 className={styles.title}>{detailedItem.Title}</h2>
              <div>
                <p>
                  <span className={styles.info}>{detailedItem.Runtime}</span>
                  <span className={styles.info}>{detailedItem.Rated}</span>
                  <span className={styles.info}>{detailedItem.Year}</span>
                </p>
                <p className={styles.info}>{detailedItem.Genre}</p>
              </div>
            </div>
            <div className={styles.detailedTopRight}>
              {
                detailedItem.Ratings.map((rating) =>               
                  <div key={rating.Source} className={styles.detailedTopRightItem}>
                    <h4 className={styles.pointTitle}>{rating.Source}</h4>
                    <div className={styles.rateSection}>
                        <span className={styles.startIcon}><CiStar /></span>
                        <span className={styles.ratingValue}>{rating.Value}</span>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className={styles.detailedBottomSide}>
            <div className={styles.detailedBottomSideLeft}>
              <img className={styles.detailedPoster} src={detailedItem.Poster} />
            </div>
            <div className={styles.detailedBottomSideRight}>
              <h3 className={styles.title}>Director</h3>
              <p>{detailedItem.Director}</p>
              <h3 className={styles.title}>Writer</h3>
              <p>{detailedItem.Writer}</p>
              <h3 className={styles.title}>Actors</h3>
              <p>{detailedItem.Actors}</p>
              <h3 className={styles.title}>Plot</h3>
              <p>{detailedItem.Plot}</p>
              <h3 className={styles.title}>Country</h3>
              <p>{detailedItem.Country}</p>
              <h3 className={styles.title}>Awawrds</h3>
              <p>{detailedItem.Awards}</p>
            </div>
          </div>
          {
            detailedItem.Type === 'series' &&
            <ListSeasons serieObj={detailedItem} />
          }
        </div> :
        <div></div>
      }
    </div>

  );
};

export default DetailedItem;