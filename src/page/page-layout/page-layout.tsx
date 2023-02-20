import { ReactNode } from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './page-layout.module.css';

type PropsType = {
  children: ReactNode;
}

function PageLayout({children}: PropsType): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      {children}
    </div>
  );
}

export default PageLayout;
