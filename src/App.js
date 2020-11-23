import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
