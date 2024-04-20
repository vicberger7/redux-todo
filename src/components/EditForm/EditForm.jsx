import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { setCurrentTodo } from 'reduxTodo/todoSlice';

import style from './EditForm.module.css';
import { useDispatch } from 'react-redux';

export const EditForm = () => {
  const dispatch = useDispatch();

  return (
    <form className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={''}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(setCurrentTodo(null))}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
