import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContent } from './Modal.styles';

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ showModal, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showModal, onClose]);

  return showModal
    ? createPortal(
        <ModalOverlay onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {children}
          </ModalContent>
        </ModalOverlay>,
        document.body,
      )
    : null;
};

export default ContactModal;
