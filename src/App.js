import React from 'react';
import { createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TotoTemplate';
import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
const GolobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GolobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
