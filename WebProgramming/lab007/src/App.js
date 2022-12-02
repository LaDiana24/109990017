import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import MySidebar from './components/sidebar.js';
import Main from './components/main.js';

function App() {
  return (
    <div className="App">   
      <Title/>
      <MySidebar/>
      <Main/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello class!
        </p>
      </header>
    </div>
  );
}

export default App;