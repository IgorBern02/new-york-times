import { useParams } from "react-router-dom";
import { useNews, NewsCard } from "../components/news";

import type { HeaderProps } from "../components/header/types/header";

export function AllNewsPage({ dark }: HeaderProps) {
  const { section } = useParams();
  const { articles } = useNews(section ?? "world");

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-5xl font-bebasneue uppercase mt-20 mb-8 text-center">
        {section} News
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {articles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
}
