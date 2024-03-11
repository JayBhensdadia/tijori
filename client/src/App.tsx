
import { Button, DarkThemeToggle, Flowbite } from 'flowbite-react';
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {




  return (
    <Flowbite>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </Flowbite>
  )
}

export default App
