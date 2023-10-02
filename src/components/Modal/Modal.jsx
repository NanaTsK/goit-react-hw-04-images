import { useEffect, useCallback } from 'react';

import { ModalOverlay, ModalWindow } from './Modal.styled';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const Modal = ({ largeImageURL, tags, onCloseModal }) => {
  const closeModalByEsc = useCallback(
    ({ code }) => {
      if (code === 'Escape') onCloseModal();
    },
    [onCloseModal]
  );

  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) onCloseModal();
  };

  const preventImageClickClose = e => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalByEsc);
    disablePageScroll();

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
      enablePageScroll();
    };
  }, [closeModalByEsc]);

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} onClick={preventImageClickClose} />
      </ModalWindow>
    </ModalOverlay>
  );
};
