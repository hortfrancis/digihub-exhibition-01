import data from './data/data';
import Footer from './components/Footer/Footer';
import Artwork from './components/Artwork/Artwork';
import Caption from './components/Caption/Caption';
import './App.css'
import { useState, useEffect } from 'react';

function App() {

  console.log(data);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const displayData = data[currentIndex];

  const prevIndex = () => setCurrentIndex(prev => (prev - 1 + data.length) % data.length);
  const nextIndex = () => setCurrentIndex(prev => (prev + 1) % data.length);

  return (
    <>
      <div className='App'>
        <div className='controls'>
          <button className='nav-button left' onClick={prevIndex}>&lt;</button>
          <button className='nav-button right' onClick={nextIndex}>&gt;</button>
        </div>
        <main className='layout-container'>
          <Caption description={displayData.description} prompts={displayData.prompts} />
          <Artwork filename={displayData.artwork} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
