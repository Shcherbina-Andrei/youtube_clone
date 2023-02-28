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
        <button className={`${styles.categoryButton} ${selectedCategory === category.name ? styles.categoryButtonSelected : ''}`} key={category.name} onClick={() => setSelectedCategory(category.name)}>
          <span className={styles.iconsButtonSvg}>
            {category.icon}
          </span>
          <span className={styles.textButton}>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
