import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import normaliseBranches from './components/Data/NormaliseData';

/* function branchesToRender(from, to) {
  let branchesToDisplay = [];
  for (let i = from; i <= to; i++) {
    branchesToDisplay += normaliseBranches.branches[i];
  }
  console.log(branchesToRender(1, 2));
  return branchesToDisplay;
} */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main className="App-main">
        <Sidebar branches={normaliseBranches.branches}></Sidebar>
        <div className="App-map">
          <Map branches={normaliseBranches.branches} />
        </div>
      </main>
    </div>
  );
}

export default App;
