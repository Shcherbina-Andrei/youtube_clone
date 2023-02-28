import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './search-bar.module.css';

function SearchBar(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} placeholder="Search..." type="text" value={searchTerm} onChange={(evt) => setSearchTerm(evt.target.value)} />
      <button className={styles.button} type="submit">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 15L21 21" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ff0000" strokeWidth="2"/>
        </svg>
        <span className="visually-hidden">Search</span>
      </button>
    </form>
  );
}

export default SearchBar;
