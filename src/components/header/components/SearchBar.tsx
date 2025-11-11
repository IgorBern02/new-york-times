import SearchIcon from "../../../assets/icons/search.svg";

interface SearchBarProps {
  dark: boolean;
}

export function SearchBar({ dark }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 border mt-6 w-4/5 p-1 rounded-lg">
      <img
        src={SearchIcon}
        className={`w-5 h-5 ${dark ? "invert" : ""}`}
        alt="Search"
      />
      <input
        placeholder="Search notice"
        type="text"
        className="w-full outline-none text-base text-black dark:text-white bg-transparent"
      />
    </div>
  );
}
