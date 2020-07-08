import React from 'react';
import { createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TotoTemplate';
import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoCreate from './components/TodoCreate';
const GolobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <GolobalStyle />
    <TodoTemplate>
       <TodoHead />
       <TodoList />
       <TodoCreate />
    </TodoTemplate>
    </>
  );
}

export default App;
