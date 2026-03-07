import React from "react";
import { Page } from "../Page";

export const GoToSpace = () => {
  return (
    <Page title={"Go to Space Today"} lastUpdated={new Date(2024, 8, 30)}>
      <p>
        What is the most Tetratopian thing? Well, it's either using prediction
        markets to optimise for spaceflight, or using prediction markets to
        optimise for big cities and tall buildings. This page is the page about
        spaceflight.
      </p>
      <h1>Return to the Moon</h1>
      <p>Humans first walked on the Moon in 1969.</p>
    </Page>
  );
};
