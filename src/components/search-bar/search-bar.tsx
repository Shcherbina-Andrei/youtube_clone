import styles from './search-bar.module.css';

function SearchBar(): JSX.Element {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="Search..." type="text" value="" />
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
