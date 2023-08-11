import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
