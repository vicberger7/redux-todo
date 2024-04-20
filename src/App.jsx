import { Section, Container, Header, Text } from 'components';
import { Form } from './components/Form/Form';
import { TodoList } from './components/TodoList/TodoList';
import { Filter } from './components/Filter/Filter';
import { EditForm } from './components/EditForm/EditForm';
import { useSelector } from 'react-redux';

export const App = () => {
  const isEdit = useSelector(state => state.todos.currentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
        </Container>
      </Section>
    </>
  );
};
