import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/signin' element={<h2>signin</h2>}/>
          <Route path='/signup' element={<h2>signup</h2>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
