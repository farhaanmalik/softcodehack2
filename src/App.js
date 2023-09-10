import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Prizes from './pages/Prizes';
import DeveloperExperience from './pages/DeveloperExperience';
import DataDriven from './pages/DataDriven';
import Particle from './components/Particle';

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
          <Particle />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/prizes' element={<Prizes />} />
            <Route path='/themes/ai-apps-for-developer-experience' element={<DeveloperExperience />} />
            <Route path='/themes/ai-apps-for-data-driven-insights' element={<DataDriven />} />
          </Routes>

        </BrowserRouter>
      )}
    </>
  );
}

export default App;
