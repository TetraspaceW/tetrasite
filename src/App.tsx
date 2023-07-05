import { her, her2 } from "./assets/assets";
import "./App.css";
import { useState } from "react";

function App() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        >
          <img src={mouseOver ? her : her2} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
