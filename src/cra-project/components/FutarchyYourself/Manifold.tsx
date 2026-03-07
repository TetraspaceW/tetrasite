export const Manifold = ({ slug }: { slug: string }) => {
  return (
    <iframe
      src={`https://manifold.markets/embed/${slug}`}
      className="manifold-embed"
    />
  );
};
