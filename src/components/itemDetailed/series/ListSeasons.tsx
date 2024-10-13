import React, {useState, useEffect} from 'react';
import styles from '../../../styles/listSelector.module.scss';
import { ItemDetails } from '../../../api/apiInterface';
import { searchEpisodesByParam } from '../../../api/apiCalls';
import { Episode } from '../../../api/apiInterface';
import Loading from '../../utils/Loading';

interface ListSeasonProps {
  serieObj: ItemDetails;
}

const ListSeasons: React.FC<ListSeasonProps> = ({serieObj}) => {
  
  const seasonsArray: number[] = Array.from({ length: parseInt(serieObj.totalSeasons) }, (_, i) => i + 1);
  const [selectedSeason, setSelectedSeason] = useState<number>(0);
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const selectSeason = async (seasonNumb: number) => {
    setSelectedSeason(seasonNumb);
    setLoading(true);
    const response = await searchEpisodesByParam(serieObj.imdbID, seasonNumb);
    setEpisodeList(response.Episodes);
    setLoading(false);
  }
 
  return (
    <div>
      <div className={styles.seasonSelectionMain}>
        <div className={styles.typeSelectionMain}>
          {
            seasonsArray.map((item) => 
              <div key={item} onClick={() => selectSeason(item)} className={selectedSeason === item ? styles.selectedType : styles.unSelectedType}>
                {`Season ${item}`}
              </div>
            )
          }
        </div>
        {
            loading ?
            <Loading /> :
            <div className={styles.listEpisodes}>
                {
                  episodeList.map((item) => 
                   <div key={item.imdbID}>
                     <h4>Episode {item.Episode}</h4>
                     <p>{item.Title}</p>
                     <p>{item.Released}</p>
                     <p>{item.imdbRating}/10</p>
                   </div>
                 )
                }
            </div>
        }
      </div>
    </div>
  );
};

export default ListSeasons;