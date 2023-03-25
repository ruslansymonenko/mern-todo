import './App.scss';

import AuthPage from './pages/AuthPage/AuthPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AuthPage/>
    </div>
  );
}

export default App;
