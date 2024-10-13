import React from 'react';
import styles from '../styles/page.module.scss';
import ListSelector from '../components/listSelector/ListSelector';
import SearchBox from '../components/search/SearchBox';
import MainDashboard from '../components/itemDashboard/MainDashboard';

const HomePage: React.FC = () => {
  return (
    <div className={styles.PageMain}>
      <ListSelector />
      <SearchBox />
      <MainDashboard />
    </div>
  );
};

export default HomePage;