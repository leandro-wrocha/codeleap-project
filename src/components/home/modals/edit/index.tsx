import Modal from 'react-modal';
import styles from './styles.module.scss';

interface IModalEditPostProps {
  show: boolean;
  onHide: () => void;
}

export const ModalEditPost = ({ show, onHide }: IModalEditPostProps) => {
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
          alignItems: 'center',
          background: '#777777CC'
        }
      }}
    >
      <div>
        <label>Edit item</label>

        <form>
          <div className={styles.formInputs}>
            <div>
              <label>Title</label>
              <input placeholder='hello world' />
            </div>

            <div>
              <label>Content</label>
              <textarea placeholder='content here' />
            </div>
          </div>

          <div className={styles.formButtons}>
            <button onClick={onHide}>
              <span>Cancel</span>
            </button>

            <button className={styles.save}>
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
} 