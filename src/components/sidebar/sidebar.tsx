import { categories } from '../../const';
import styles from './sidebar.module.css';

type PropsType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

function Sidebar({selectedCategory, setSelectedCategory}: PropsType): JSX.Element {

  return (
    <div className={styles.wrapper}>
      {categories.map((category) => (
        <button className={`${styles.categoryButton} ${selectedCategory === category ? styles.categoryButtonSelected : ''}`} key={category} onClick={() => setSelectedCategory(category)}>
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
