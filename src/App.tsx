import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { ShillsList } from "./components/ShillsList/ShillsList";
import { EffectiveAltruism } from "./components/EffectiveAltruism/EffectiveAltruism";
import { AgainstDonorLottery } from "./components/AgainstDonorLottery";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tetraspace-shills-list" element={<ShillsList />} />
          <Route path="/effective-altruism" element={<EffectiveAltruism />} />
          <Route
            path="/blog/against-donor-lottery"
            element={<AgainstDonorLottery />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
