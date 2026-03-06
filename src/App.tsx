import { HashRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { ShillsList } from "./components/ShillsList/ShillsList";
import { EffectiveAltruism } from "./components/EffectiveAltruism/EffectiveAltruism";
import { AgainstDonorLottery } from "./components/AgainstDonorLottery";
import { ScrollToTop } from "./components/ScrollToTop";
import React from "react";
import { FutarchyYourself } from "./components/FutarchyYourself/FutarchyYourself";
import { GoToSpace } from "./components/FutarchyYourself/GoToSpace";
import { Glossary } from "./components/Glossary/Glossary";
import { Canary } from "./components/Canary";

export const App = () => {
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
            <Route path="/futarchy" element={<FutarchyYourself />} />
            <Route path="/futarchy/go-to-space" element={<GoToSpace />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/canary" element={<Canary />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
};
