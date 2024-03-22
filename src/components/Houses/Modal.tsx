import React, { useState } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[]; // Массив ссылок на изображения домов
  description: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  images,
  description,
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
            <button onClick={nextImage} className={styles.nextButton}>
              Next
            </button>
            <button onClick={prevImage} className={styles.prevButton}>
              Prev
            </button>
          </div>
          <div className={styles.descriptionContainer}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
