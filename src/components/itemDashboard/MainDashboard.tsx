import React, { useState, useEffect } from 'react';
import styles from '../../styles/itemDashboard.module.scss';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { ItemDetails } from '../../api/apiInterface';
import { fetchDefaultDashboard, getItemsById } from '../../api/apiCalls';
import BoardItem from './dashboardItem/BoardItem';
import Loading from '../utils/Loading';
import { useDispatch } from 'react-redux';
import { setTotalResults } from '../../redux/reducers/dashboardReducer';
import Pagination from '../utils/Pagination';

const MainDashboard: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [dashboardItems, setDashboardItems] = useState<ItemDetails[]>([]);
  const dashboardInfo = useSelector((state :RootState) => state.dashboard.dashboardItem);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getDashboardItems = async () => {
      setLoading(true);
      const response = await fetchDefaultDashboard(dashboardInfo?.page, dashboardInfo?.filterType, dashboardInfo?.year, dashboardInfo.searchParam);
      const itemList = await getItemsById(response);
      setDashboardItems(itemList);
      dispatch(setTotalResults(parseInt(response.totalResults)));
      setLoading(false)
    }
    getDashboardItems();

  }, [dashboardInfo]);
  
  
  return (
    <div>
      {
        loading ?
        <Loading /> :
        <div>
          <div className={styles.dashboardMain}>
            {
              dashboardItems.map((item) => <BoardItem key={item.imdbID} boardItem={item} />)
            }
          </div>
          <Pagination />
        </div>
      }
    </div>
  );
};

export default MainDashboard;