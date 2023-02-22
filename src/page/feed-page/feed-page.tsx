import Sidebar from '../../components/sidebar/sidebar';
import Videos from '../../components/videos/videos';
import PageLayout from '../page-layout/page-layout';
import {useEffect, useState} from 'react';
import styles from './feed-page.module.css';
import {fetchFromAPI} from '../../utils/fetchFromAPI';
import { Video } from '../../types/video';
import { Channel } from '../../types/channel';

function FeedPage(): JSX.Element {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [items, setItems] = useState<(Video & Channel)[]>([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setItems(data.items));
  }, [selectedCategory]);

  return (
    <PageLayout>
      <div className={styles.feed}>
        <div className={styles.sidebarWrapper}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className={styles.videosWrapper}>
          <h4 className={styles.videosTitle}>
            {selectedCategory} <span style={{color: '#f31503'}}>videos</span>
          </h4>
          <Videos items={items}/>
        </div>
      </div>
    </PageLayout>
  );
}

export default FeedPage;
