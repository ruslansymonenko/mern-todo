import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
