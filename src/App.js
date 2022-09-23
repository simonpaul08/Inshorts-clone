import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {

  const [toggle, setToggle] = useState(false)

  const toggleSidebar = () => {
    setToggle(true)
  }
  const handleCloseBtn = () => {
    setToggle(false)
  }
  return (
    <>
      <Sidebar toggle={toggle} handleCloseBtn={handleCloseBtn}/>
      <Header toggleSidebar={toggleSidebar}/>
      <Main />
    </>
  );
}

export default App;
