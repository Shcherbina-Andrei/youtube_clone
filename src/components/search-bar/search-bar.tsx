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
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
