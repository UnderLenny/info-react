import Image from 'next/image';
import React, { useState } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  description: string;
  sub_description: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  images,
  description,
  sub_description,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <div className={styles.slider}>
            <img
              src={images[currentImageIndex]}
              alt={`House ${currentImageIndex + 1}`}
              className={styles.image}
            />
            <div className={styles.switcher}>
              <button onClick={prevImage} className={styles.prevButton}>
                <Image
                  src={'/long-arrow-left-icon.svg'}
                  alt={''}
                  className={styles.scroll}
                  width={70}
                  height={70}
                />
              </button>
              <button onClick={nextImage} className={styles.nextButton}>
                <Image
                  src={'/long-arrow-right-icon.svg'}
                  alt={''}
                  className={styles.scroll}
                  width={70}
                  height={70}
                />
              </button>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.description_title}>{title}</h2>
            <p className={styles.description_paragraph}>{description}</p>
            <p className={styles.description_paragraph}>{sub_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
