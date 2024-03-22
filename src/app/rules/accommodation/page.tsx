import styles from './page.module.css';

export default function BookingRules() {
  return (
    <section className={styles.rules_section}>
      <div className={styles.rules}>
        <h2 className={styles.rules_text}>❗️ Бронирование от 2х суток</h2>
        <h2 className={styles.rules_text}>
          ❗️ Система скидок на длительное проживание
        </h2>
        <h2 className={styles.rules_text}>
          ❗️ Бронирование по предоплате 50% Полный расчет при заселении
        </h2>
        <h2 className={styles.rules_text}>
          ❗️ Страховой депозит 10 000р ( при выселение возвращается, после
          осмотра дома)
        </h2>
        <h2 className={styles.rules_text}>❗️ Запрещено курение в доме</h2>
        <h2 className={styles.rules_text}>
          ❗️ Запрещено разведение открытого огня вне мангала
        </h2>
        <h2 className={styles.rules_text}>
          ❗️ Не разрешается размещение с животными
        </h2>
        <h2 className={styles.rules_text}>
          ❗️ При отмене бронирования менее, чем за 10 дней до даты заезда,
          предоплата не возвращается
        </h2>
      </div>
    </section>
  );
}
