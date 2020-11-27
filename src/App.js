import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Treasures New Website! Hope you enjoy your stay!
        </p>
        <a
          className="App-link"
          href="https://www.treasures.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Treasures Current Website
        </a>
      </header>
      <Footer/>
    </div>
  ); 
}

export default App;
