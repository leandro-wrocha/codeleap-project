import styles from './styles.module.scss';

import Modal from 'react-modal';

interface IModalConfirmDeleteProps {
  show: boolean;
  onHide: () => void;
}

export const ModalConfirmDelete = ({ show, onHide }: IModalConfirmDeleteProps) => {

  return (
    <Modal
      isOpen={show}
      className={styles.modal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}
    >
      <div>
        <label>Are you sure you want to delete this item?</label>

        <div>
          <button onClick={onHide}>
            <span>Cancel</span>
          </button>

          <button className={styles.delete}>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </Modal>
  )
} 