import {Link} from 'react-router-dom';
import SearchBar from '../search-bar/search-bar';
import styles from './navbar.module.css';

function Navbar(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} to="/">
        <svg height="45px" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#ff0000"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white"/>
        </svg>
      </Link>
      <SearchBar />
    </div>
  );
}

export default Navbar;
