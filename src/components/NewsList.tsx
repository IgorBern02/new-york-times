import { useEffect, useState } from "react";
import { getTopStories } from "../services/api";

interface Article {
  title: string;
  abstract: string;
  url: string;
  multimedia?: { url: string; caption: string }[];
}

export function NewsList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState("technology");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTopStories(section);
        setArticles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [section]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Notícias: {section.charAt(0).toUpperCase() + section.slice(1)}
      </h1>

      <div className="flex justify-center mb-6">
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="border rounded p-2"
        >
          <option value="technology">Technology</option>
          <option value="world">World</option>
          <option value="science">Science</option>
          <option value="arts">Arts</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {article.multimedia && article.multimedia[0] && (
              <img
                src={article.multimedia[0].url}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.abstract}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
