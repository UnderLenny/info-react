import Link from 'next/link';
import styles from './rules.module.css';

const Rules = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rules}>
        <Link href={'/rules/accommodation'}>
          <h3 className={styles.rules_text}>Правила проживания</h3>
        </Link>
      </div>
    </footer>
  );
};

export default Rules;
