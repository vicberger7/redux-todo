import { Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCurrentTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ todo, number }) => {
  const dispatch = useDispatch();

  const handleSetCurrent = () => {
    dispatch(setCurrentTodo(todo));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO {number}
      </Text>

      <Text>{todo.text}</Text>
      <button
        onClick={handleDelete}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        onClick={handleSetCurrent}
        className={style.editButton}
        type="button"
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
