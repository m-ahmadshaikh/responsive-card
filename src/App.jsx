import './App.css';
import React, { useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import EnterPassword from './components/Main/enter_password';
function App() {
  const [show, setShow] = useState(false);

  const onSubmit = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="App">
      <Sidebar />
      {show ? <EnterPassword /> : <Main onSubmit={onSubmit} />}
    </div>
  );
}

export default App;
