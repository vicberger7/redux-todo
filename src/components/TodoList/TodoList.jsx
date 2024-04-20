import { Text } from 'components';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from 'reduxTodo/selectors';
import { Todo, GridItem } from 'components';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);
  console.log(todos);
  return (
    <>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo todo={todo} number={index + 1} />
        </GridItem>
      ))}
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
    </>
  );
};
