import data from './data/data';
import Footer from './components/Footer/Footer';
import Artwork from './components/Artwork/Artwork';
import Caption from './components/Caption/Caption';
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const displayData = data[currentIndex];

  return (
    <>
      <div className='App'>
        <main className='layout-container'>
          <Caption description={displayData.description} prompt={displayData.prompt} />
          <Artwork filename={displayData.artwork} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
