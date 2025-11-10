// src/components/theme/ThemeToggle.tsx
import MoonIcon from "../../assets/icons/moon.png";
import SunIcon from "../../assets/icons/sun.png";

import type { HeaderProps } from "../../types/header/header";

export function ThemeToggle({ dark, onToggle }: HeaderProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2  p-2 rounded transition cursor-pointer text-base"
    >
      <img
        src={dark ? SunIcon : MoonIcon}
        alt={dark ? "Light mode" : "Dark mode"}
        className="w-5 h-5"
      />
    </button>
  );
}
