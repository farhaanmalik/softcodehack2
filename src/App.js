import './App.css';
import Header from "./components/Header"
import Hero from './pages/Hero';
import { SiteBlob } from "./components/Siteblob"

function App() {
  return (
    <div className='bg-black'>
      <Header />
      <SiteBlob />
      <Hero />
    </div>
  );
}

export default App;
