import '../AppComponent/App.css';
import Navbar from '../NavbarComponent/Navbar';
import Hero from '../HeroComponent/Hero';
import Cards from '../CardComponent/Card';
import cardData from '../../public/data.js';

function App() {
  const cards = cardData.map((data) => {
    return <Cards 
      key = {data.id}
      {...data}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
