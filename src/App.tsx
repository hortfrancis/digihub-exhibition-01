import data from './data/data';
import Footer from './components/Footer/Footer';
import Artwork from './components/Artwork/Artwork';
import Caption from './components/Caption/Caption';
import './App.css'

function App() {

  console.log(data);

  const displayData = data[0];

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
