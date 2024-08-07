import React from "react";

export const Manifold = ({ slug }: { slug: string }) => {
  return (
    <iframe
      src={`https://manifold.markets/embed/${slug}`}
      title="Who will win the 2024 US Presidential Election?"
      className="manifold-embed"
    />
  );
};
