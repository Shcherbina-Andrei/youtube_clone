import PageLayout from '../../page/page-layout/page-layout';
import styles from './page-not-found.module.css';

function PageNotFound(): JSX.Element {
  return (
    <PageLayout>
      <div className={styles.wrapper}>
        Page not found
      </div>
    </PageLayout>
  );
}

export default PageNotFound;
