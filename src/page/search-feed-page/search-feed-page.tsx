import Videos from '../../components/videos/videos';
import PageLayout from '../page-layout/page-layout';
import {useEffect, useState} from 'react';
import styles from './search-feed-page.module.css';
import {fetchFromAPI} from '../../utils/fetchFromAPI';
import { Video } from '../../types/video';
import { Channel } from '../../types/channel';
import {useParams} from 'react-router-dom';

function FeedPage(): JSX.Element {
  const [items, setItems] = useState<(Video & Channel)[]>([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    if (searchTerm) {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setItems(data.items));
    }
  }, [searchTerm]);

  return (
    <PageLayout>
      <div className={styles.feed}>
        <div className={styles.videosWrapper}>
          <h4 className={styles.videosTitle}>
            Search result for <span style={{color: '#f31503'}}>{searchTerm}</span>
          </h4>
          <Videos items={items}/>
        </div>
      </div>
    </PageLayout>
  );
}

export default FeedPage;
