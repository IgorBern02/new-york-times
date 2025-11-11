import { MenuHamburguer } from "./components/MenuHamburguer";
import { ThemeToggle } from "./components/ThemeToggle";
import { SearchBar } from "./components/SearchBar";
import { SocialIcons } from "./components/SocialIcons";
import { useHeaderDate } from "./hooks/useHeaderDate";
import type { HeaderProps } from "./types/header";

export function Header({ dark, onToggle }: HeaderProps) {
  const formattedDate = useHeaderDate();

  return (
    <header className="text-black dark:text-white w-full flex flex-col items-center">
      {/* Linha superior */}
      <div className="w-full fixed top-0 z-10 backdrop-blur-xl flex justify-between items-center px-3 py-2 border-b">
        <p className="text-sm font-merriweather">Today: {formattedDate}</p>

        <div className="flex items-center gap-4">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <MenuHamburguer dark={dark} />
        </div>
      </div>

      {/* Título + subtítulo + busca + ícones */}
      <div className="w-full mt-16 flex flex-col items-center py-5 border-b">
        <h1 className="font-bebasneue text-5xl font-bold">
          TimesFeed Newspaper
        </h1>
        <p className="w-5/6 text-[11px] text-center uppercase tracking-wide font-merriweather">
          Unique and impressive newspaper theme. Since 2016
        </p>

        <SearchBar dark={dark} />
        <SocialIcons dark={dark} />
      </div>
    </header>
  );
}
