import './App.css';
import './assets/treasures.css';

function App() {
  return (
    <div className="container" className="App">
      <div className="row">
        <div className="col-12">
          <header className="App-header">
            <h3>Welcome to the Treasures New Website! &nbsp; Hope you enjoy your stay!</h3>
            <hr></hr>
            <a
              className="App-link"
              href="https://www.treasures.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            > Treasures Current Website </a>
          </header>
        </div>
      </div>



      <div className="col">
        <p>Thank you for coming by to say hello…!!! Our heart is that you will feel like you’ve just popped into our home for coffee… that you will be wonderfully inspired and feel extravagantly loved as you find out a little more about us…</p>
        <p>Long ago we realised as a family just how powerful love truly is… It’s changed our lives and we would love it to change yours! Feel free to get to know more about us... and perhaps let us get to know you? We have been honoured to be a part of many people’s stories through the years… Who knows perhaps we are meant to be a part of your story too?</p>
        <p>The heart of our family is love… people being made whole through love… because the greatest gift we can ever give or receive is love. Every one of us longs to be understood, valued, accepted and loved. Love heals wounds, restores lives, makes you feel worth something, gives you significance and lifts your head to walk with dignity whatever your life journey may have been. As we say many times as a family… Love always wins! </p>
      </div>
      <div className="col">
        <img className='img-fluid' src="/images/Waller 1-17.jpg"></img>
      </div>
    </div>

  );
}

export default App;