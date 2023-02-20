import Sidebar from '../../components/sidebar/sidebar';
import Videos from '../../components/videos/videos';
import PageLayout from '../page-layout/page-layout';
import styles from './feed-page.module.css';

function FeedPage(): JSX.Element {
  return (
    <PageLayout>
      <div className={styles.feed}>
        <div className={styles.sidebarWrapper}>
          <Sidebar />
        </div>
        <div className={styles.videosWrapper}>
          <h4 className={styles.videosTitle}>
            New <span style={{color: '#f31503'}}>videos</span>
          </h4>
          <Videos />
        </div>
      </div>
    </PageLayout>
  );
}

export default FeedPage;
