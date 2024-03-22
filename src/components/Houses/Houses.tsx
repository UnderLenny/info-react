'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './houses.module.css';
import Modal from './Modal';

const Houses = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  return (
    <section className={styles.section}>
      <button
        onClick={() => setShowFirstModal(true)}
        className={styles.button_link}
      >
        <Image
          className={styles.img}
          src="/house.jpg"
          alt="Mountain"
          width={350}
          height={200}
        />
        <div className={styles.title_block}>
          <h1 className={styles.title}>Дом 1</h1>
          <p className={styles.section_text}>В стадии оформления🕓.</p>
        </div>
      </button>
      <button
        onClick={() => setShowSecondModal(true)}
        className={styles.button_link}
      >
        <Image
          className={styles.img}
          src="/house.jpg"
          alt="Mountain"
          width={350}
          height={200}
        />
        <div className={styles.title_block}>
          <h1 className={styles.title}>Дом 2</h1>
          <p className={styles.section_text}>
            Экологичный дом с панорамными окнами и видом на горы Шерегеша
            обеспечивает идеальный отдых для души и тела. Утреннее пробуждение
            без будильника становится частью ежедневной рутины.
          </p>
        </div>
      </button>
      <button
        onClick={() => setShowThirdModal(true)}
        className={styles.button_link}
      >
        <Image
          className={styles.img}
          src="/house.jpg"
          alt="Mountain"
          width={350}
          height={200}
        />
        <div className={styles.title_block}>
          <h1 className={styles.title}>Дом 3</h1>
          <p className={styles.section_text}>
            Современный дом из дерева с панорамными окнами и вторым светом
            приглашает насладиться красотой природы и гор Шерегеша. Отдых без
            будильника каждое утро становится возможным в этом уютном убежище.
          </p>
        </div>
      </button>
      <Modal
        isOpen={showFirstModal}
        onClose={() => setShowFirstModal(false)}
        title="Модальное окно для Дома 1"
        images={['/house.jpg', '/house2.jpg', '/house.jpg']}
        description="Содержимое модального окна для Дома 1"
      />
      <Modal
        isOpen={showSecondModal}
        onClose={() => setShowSecondModal(false)}
        title="Модальное окно для Дома 2"
        images={['/house.jpg', '/house2.jpg', '/house.jpg']}
        description="Содержимое модального окна для Дома 2"
      />
      <Modal
        isOpen={showThirdModal}
        onClose={() => setShowThirdModal(false)}
        title="Модальное окно для Дома 3"
        images={['/house.jpg', '/house2.jpg', '/house.jpg']}
        description="Содержимое модального окна для Дома 3"
      />
    </section>
  );
};

export default Houses;
