import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { useEffect } from 'react';

import { IoPersonCircleSharp } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";

Modal.setAppElement('#root');

export default function ImageModal({ onCloseModal, isOpen, image: { urls, alt_description, user, likes } }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName={css.overlay}
      className={css.modal}
      contentLabel="Image enlargement"
    >
      <div className={css.image}>
        <img src={urls.regular} alt={alt_description} />
        <div className={css.desc}>
          <p className={css.text}>
            <IoPersonCircleSharp /> {user.name}
          </p>
          <p className={css.text}>
            <AiFillLike /> {likes}
          </p>
        </div>
      </div>
    </Modal>
  );
}