import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/Homepage";
import { ShillsList } from "./components/ShillsList/ShillsList";
import { EffectiveAltruism } from "./components/EffectiveAltruism/EffectiveAltruism";
import { AgainstDonorLottery } from "./components/AgainstDonorLottery";
import { ScrollToTop } from "./components/ScrollToTop";
import { Tetrareflections } from "./components/Tetrareflections/Tetrareflections";

function App() {
  return (
    <div className="main">
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tetraspace-shills-list" element={<ShillsList />} />
            <Route path="/effective-altruism" element={<EffectiveAltruism />} />
            <Route
              path="/blog/against-donor-lottery"
              element={<AgainstDonorLottery />}
            />
            <Route path="/tetrareflections" element={<Tetrareflections />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;
