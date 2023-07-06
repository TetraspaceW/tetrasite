import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { ShillsList } from "./components/ShillsList/ShillsList";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tetraspace-shills-list" element={<ShillsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
