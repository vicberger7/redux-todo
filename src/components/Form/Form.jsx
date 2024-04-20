import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoSlice';
import { useState } from 'react';

export const Form = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      id: Date.now(),
      text: value,
    };

    dispatch(addTodo(todo));

    setValue('');
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        onChange={handleChange}
        value={value}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
