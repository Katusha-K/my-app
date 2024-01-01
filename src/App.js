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
      </header>
    </div>
  );
}

export default App;
