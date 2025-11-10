// App.tsx
import { Header } from "./components/header/Header";
import { useDarkMode } from "./components/theme/useDarkMode";

function App() {
  const { dark, toggleDark } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header dark={dark} onToggle={toggleDark} />
    </div>
  );
}

export default App;
