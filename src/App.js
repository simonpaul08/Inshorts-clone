import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      <Header toggleSidebar={toggleSidebar}/>
      <BrowserRouter>
        <Sidebar toggle={toggle} handleCloseBtn={handleCloseBtn}/>
        <Routes>
          <Route exact path='/' element={<Main category="general"/>}/>
          <Route exact path='/business' element={<Main category="business"/>}/>
          <Route exact path='/entertainment' element={<Main category="entertainment"/>}/>
          <Route exact path='/health' element={<Main category="health"/>}/>
          <Route exact path='/science' element={<Main category="science"/>}/>
          <Route exact path='/technology' element={<Main category="technology"/>}/>
          <Route exact path='/sports' element={<Main category="sports"/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
