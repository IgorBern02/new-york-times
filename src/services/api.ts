const API_KEY = "Swzm6v29ngL0du4BsWyqHZv0aGq3qMWz";

export async function getTopStories(section: string) {
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erro ao buscar notícias");
  const data = await response.json();
  return data.results;
}
