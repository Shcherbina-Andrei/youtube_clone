import Videos from '../../components/videos/videos';
import PageLayout from '../page-layout/page-layout';
import {useEffect} from 'react';
import styles from './search-feed-page.module.css';
import {useParams} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSearchVideos } from '../../store/videos-data/selectors';
import { fetchSearchVideosAction } from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { getStatusDataLoading } from '../../store/app-process/selectors';

function SearchFeedPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const searchedItems = useAppSelector(getSearchVideos);
  const loadingStatus = useAppSelector(getStatusDataLoading);
  const {searchTerm} = useParams();

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchSearchVideosAction(searchTerm));
    }
  }, [searchTerm, dispatch]);

  if (!searchedItems || loadingStatus) {
    return (
      <PageLayout>
        <LoadingScreen />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className={styles.searchFeed}>
        <div className={styles.wrapper}>
          <h2 className={styles.videosTitle}>
            Search result for <span style={{color: '#f31503'}}>{searchTerm}</span>
          </h2>
          <Videos items={searchedItems.items}/>
        </div>
      </div>
    </PageLayout>
  );
}

export default SearchFeedPage;
