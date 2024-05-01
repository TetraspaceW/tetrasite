export const parseQueryString = (queryString: string) => {
  const query = new Map<string, string>();
  for (const pair of queryString.slice(1).split("&")) {
    const [key, value] = pair.split("=");
    query.set(key, value);
  }
  return query;
};
