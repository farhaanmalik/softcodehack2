import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Prizes from './pages/Prizes';
import DeveloperExperience from './pages/DeveloperExperience';
import DataDriven from './pages/DataDriven';

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
            <Route path='/prizes' element={<Prizes />} />
            <Route path='/themes/ai-apps-for-developer-experience' element={<DeveloperExperience />} />
            <Route path='/themes/ai-apps-for-data-driven-insights' element={<DataDriven />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
