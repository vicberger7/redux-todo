import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <input
      onChange={handleChange}
      className={style.input}
      placeholder="Find it"
      name="filter"
    />
  );
};
