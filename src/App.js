import React from 'react';
import Click from './pages/Click';
import List from './pages/List';
import Form from './pages/Form';
import WindowSize from './pages/WindowSize';
import './App.css';

const oppgave = 4;

function App() {
  return (
    <>
      { oppgave === 1 &&
        <Click />
      }
      { oppgave === 2 &&
        <List />
      }
      { oppgave === 3 &&
        <WindowSize />
      }
      { oppgave === 4 &&
        <Form />
      }
    </>
  );
}

export default App;
