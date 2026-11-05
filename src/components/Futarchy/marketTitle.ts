const cache = new Map<string, Promise<string>>();

// Looks up a market's question at build time, to use as its embed's title.
// Cached so the dev server doesn't refetch every market on every reload.
export const getMarketTitle = (slug: string): Promise<string> => {
  let title = cache.get(slug);
  if (!title) {
    title = fetchMarketTitle(slug);
    cache.set(slug, title);
  }
  return title;
};

// Falls back to a generic title so a Manifold outage can't break the build.
const fetchMarketTitle = async (slug: string): Promise<string> => {
  // Embed slugs are "user/market-slug"; the API only wants the market part.
  const marketSlug = slug.slice(slug.lastIndexOf("/") + 1);
  try {
    const response = await fetch(
      `https://api.manifold.markets/v0/slug/${encodeURIComponent(marketSlug)}`,
      { signal: AbortSignal.timeout(10_000) },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const { question } = (await response.json()) as { question?: unknown };
    if (typeof question !== "string") throw new Error("no question in response");
    return `Manifold market: ${question}`;
  } catch (error) {
    console.warn(`Couldn't fetch title for Manifold market ${slug}: ${error}`);
    return "Manifold market";
  }
};
