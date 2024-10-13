import React, {useState} from 'react';
import styles from '../../styles/search.module.scss';
import { AppDispatch, RootState } from '../../redux/store';
import { setSearchParam } from '../../redux/reducers/dashboardReducer';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from "react-icons/fa";

const SearchBox: React.FC = () => {
  const type = useSelector((state :RootState) => state.dashboard.dashboardItem.filterType);
  const dispatch = useDispatch<AppDispatch>();
  const [searchText, setSearchText] = useState<string>("");
  
  const search = () => {
    if(searchText === "") {
      dispatch(setSearchParam("man"));
    } else {
      dispatch(setSearchParam(searchText));
    }
  }

  return (
    <div>
      <div className={styles.inputSection}>
        <input
          value={searchText}
          className={styles.searchInput}
          placeholder={`Search ${type}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              search();
            }
          }}
        />
        <button onClick={() => search()}  className={styles.searchButton}><FaSearch /></button>
      </div>
    </div>
  );
};

export default SearchBox;