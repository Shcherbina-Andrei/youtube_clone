import { categories } from '../../const';
import styles from './sidebar.module.css';

function Sidebar(): JSX.Element {

  const selectedCategory = 'New';

  return (
    <div className={styles.wrapper}>
      {categories.map((category) => (
        <button className={`${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonSelected : ''}`} key={category}>
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
