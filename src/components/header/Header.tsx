// Header.tsx
import { MenuHamburguer } from "../menuHamburguer/menuHamburguer";
import { ThemeToggle } from "../theme/ThemeToggle";
import type { HeaderProps } from "../../types/header/header";

export function Header({ dark, onToggle }: HeaderProps) {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="text-black dark:text-white  fixed top-0 w-full z-10 flex flex-col items-center justify-between backdrop-blur-xl ">
      <div className=" w-full flex flex-row justify-between items-center px-3 py-2 border-b">
        <section className="p-1">
          <p className="text-sm font-merriweather">
            Today:{" "}
            {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
          </p>
        </section>

        <section className="flex items-center gap-4 ">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <MenuHamburguer dark={dark} />
        </section>
      </div>

      <div className=" w-full flex flex-col justify-center items-center p-5 border-b">
        <h1 className="font-bebasneue text-5xl font-bold  p-1">
          TimesFeed NewsPaper
        </h1>
        <p className="font-merriweather text-[11px] uppercase p-1">
          Unique and impressive newspaper wordpress theme. since 2016
        </p>
      </div>
    </header>
  );
}
