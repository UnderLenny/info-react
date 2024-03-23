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
        title="Дом 1"
        images={['/house.jpg', '/house2.jpg', '/house3.jpg']}
        description="В стадии оформления🕓."
        sub_description=""
      />
      <Modal
        isOpen={showSecondModal}
        onClose={() => setShowSecondModal(false)}
        title="Дом 2"
        images={['/house.jpg', '/house2.jpg', '/house3.jpg']}
        description="Экологичный дом с панорамными окнами и видом на горы Шерегеша обеспечивает идеальный отдых для души и тела. Утреннее пробуждение без будильника становится частью ежедневной рутины."
        sub_description="В доме 3 отдельные спальни также с видом на горы.  
        2 спальни с двуспальными кроватями. 1 спальня с двумя односпальными. 
        Гостинная с кухонной и обеденной зоной. 
        Есть все удобства для комфортного проживания."
      />
      <Modal
        isOpen={showThirdModal}
        onClose={() => setShowThirdModal(false)}
        title="Дом 3"
        images={['/house.jpg', '/house2.jpg', '/house3.jpg']}
        description="Современный дом из дерева с панорамными окнами и вторым светом
        приглашает насладиться красотой природы и гор Шерегеша. Отдых без
        будильника каждое утро становится возможным в этом уютном убежище."
        sub_description="В доме 3 отдельные спальни также с видом на горы.  
        2 спальни с двуспальными кроватями. 1 спальня с двумя односпальными. 
        Гостинная с кухонной и обеденной зоной. 
        Есть все удобства для комфортного проживания."
      />
    </section>
  );
};

export default Houses;
