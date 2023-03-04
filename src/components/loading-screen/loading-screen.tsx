import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinnerBox}>
        <div className={styles.threeQuarterSpinner}></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
