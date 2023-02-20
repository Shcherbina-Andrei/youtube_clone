import {Link} from 'react-router-dom';
import SearchBar from '../search-bar/search-bar';
import styles from './navbar.module.css';

function Navbar(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to="/">
        <span>Logo</span>
      </Link>
      <SearchBar />
    </div>
  );
}

export default Navbar;
