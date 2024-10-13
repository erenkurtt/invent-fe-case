import React, { useState, useEffect } from 'react';
import styles from '../../styles/pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setPage } from '../../redux/reducers/dashboardReducer';

const Pagination: React.FC = () => {
  const totalResults = useSelector((state: RootState) => state.dashboard.dashboardItem.totalResults);
  const page = useSelector((state: RootState) => state.dashboard.dashboardItem.page);
  const [pageArray, setPageArray] = useState<number[]>([]);
  const [range, setRange] = useState({ start: 0, end: 5 });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const totalPages = Math.ceil(totalResults / 10);
    const tempPageArray: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);
    setPageArray(tempPageArray);
    const newStart = page > 3 ? page - 3 : 0;
    const newEnd = newStart + 5 > totalPages ? totalPages : newStart + 5;
    setRange({ start: newStart, end: newEnd });
  }, [totalResults, page]);

  const prevButtonEvent = () => {
    if (range.start > 0) {
      setRange((prev) => ({
        start: prev.start - 1,
        end: prev.end - 1
      }));
    }
  };

  const nextButtonEvent = () => {
    if (range.end < pageArray.length) {
      setRange((prev) => ({
        start: prev.start + 1,
        end: prev.end + 1
      }));
    }
  };

  const setPageNumber = (numb : number) => {
    dispatch(setPage(numb));
  }

  return (
    pageArray.length > 0 ?
    <div className={styles.paginationMain}>
      <button
        disabled={range.start === 0 || totalResults <= 50}
        className={styles.buttonElem}
        onClick={prevButtonEvent}
      >
        Previous
      </button>
      {pageArray.slice(range.start, range.end).map((item) => (
        <button 
          key={item} 
          className={`${styles.buttonElem} ${item === page ? styles.active : ''}`}
          onClick={() => setPageNumber(item)}
        >
          {item}
        </button>
      ))}
      <button
        disabled={range.end === pageArray.length || totalResults <= 50}
        className={styles.buttonElem}
        onClick={nextButtonEvent}
      >
        Next
      </button>
    </div> :
    <div></div>
  );
};

export default Pagination;