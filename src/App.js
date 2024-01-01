import "./App.css";
import Greeting from "./happyGreetings";
import Happiness from "./Happiness";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there!</h1>
        <Greeting city="Rome" />
        <Happiness />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
