import Link from 'next/link';
import styles from './phone.module.css';

const Phone = () => {
  return (
    <section className={styles.phone}>
      <Link className={styles.phone_link} href="tel:+79039840153">
        +7 (903) 984-01-53
      </Link>
      <h2 className={styles.phone_link_text}>Whatsapp, Telegram</h2>
    </section>
  );
};

export default Phone;
