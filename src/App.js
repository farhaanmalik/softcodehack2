import './App.css';
import './Timeline.css';
import Home from './pages/Home';
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
