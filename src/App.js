import logo from './logo.svg';
import './App.css';
import Navbar from  './components/Navbar/Navbar.js'
// import Home from './components/Home';
import Home from './components/Home/index'

function App() {
  return (
    <div className="App">
       <Navbar />
       <Home />
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h3>hy buddy how are you</h3>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    
  );
}

export default App;
