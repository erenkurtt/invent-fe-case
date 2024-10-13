import React, {useState} from 'react';
import styles from '../../styles/listSelector.module.scss';
import { AppDispatch, RootState } from '../../redux/store';
import { setItemType, setYear } from '../../redux/reducers/dashboardReducer';
import { useDispatch, useSelector } from 'react-redux';

const ListSelector: React.FC = () => {
  const [yearModal, setYearModal] = useState<Boolean>(false);  
  const [yearButtonText, setYearButtonText] = useState<string>("Select year");  
  const dispatch = useDispatch<AppDispatch>();
  const listYear: string[] = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => (1900 + i).toString()).reverse();
  listYear.unshift("Reset");

  const type = useSelector((state :RootState) => state.dashboard.dashboardItem.filterType);
  const year = useSelector((state :RootState) => state.dashboard.dashboardItem.year);

  const selectType = (type: string) => {
    dispatch(setItemType(type))
  }

  const selectYear = (item: string) => {
    if(item === "Reset") {
      setYearButtonText("Select year");
      dispatch(setYear(""));
    } else {
      setYearButtonText(item);
      dispatch(setYear(item));
    }
    setYearModal(false);
  }

  return (
    <div>
      <div className={styles.selectionMain}>
        <div className={styles.typeSelectionMain}>
          <div onClick={() => selectType('movie')} className={type === 'movie' ? styles.selectedType : styles.unSelectedType}>
            MOVIES
          </div>
          <div onClick={() => selectType('series')} className={type === 'series' ? styles.selectedType : styles.unSelectedType}>
            SERIES
          </div>
        </div>
        <div className={styles.yearSelection}>
          <button onClick={() => setYearModal(!yearModal)} className={styles.yearButton}>{yearButtonText}</button>
          {
            yearModal &&
            <div className={styles.yearModalMain}>
              {
                listYear.map((item: string) => 
                  <div onClick={() => selectYear(item)} key={item} className={styles.yearModalItem}>{item}</div>
                )
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ListSelector;