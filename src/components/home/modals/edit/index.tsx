import Modal from 'react-modal';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface IModalEditPostProps {
  show: boolean;
  onHide: () => void;
  postId: number;
  loadPosts: () => void;
}

interface IFormValues {
  title: string;
  content: string;
}

export const ModalEditPost = ({ show, onHide, postId, loadPosts }: IModalEditPostProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>();

  const handleEdit = async (values: IFormValues) => {
    const response = await axios.patch(`https://dev.codeleap.co.uk/careers/${postId}`, {
      values,
    });

    loadPosts();
    onHide();
  }

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

        <form onSubmit={handleSubmit(handleEdit)}>
          <div className={styles.formInputs}>
            <div>
              <label>Title</label>
              <input {...register('title')} placeholder='hello world' />
            </div>

            <div>
              <label>Content</label>
              <textarea {...register('content')} placeholder='content here' />
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