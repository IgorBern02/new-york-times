import type { NewsCardProps } from "../types/news/news";

export function NewsCard({ title, abstract, url, image }: NewsCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
    >
      {image && (
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{abstract}</p>
      </div>
    </a>
  );
}
