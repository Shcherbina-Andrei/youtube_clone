import Navbar from '../../components/navbar/navbar';
import styles from './page-layout.module.css';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

function PageLayout(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default memo(PageLayout);
