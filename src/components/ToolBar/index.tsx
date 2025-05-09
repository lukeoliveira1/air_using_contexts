import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

export default function ToolBar() {
  const context = useContext(ThemeContext);

  return (
    <nav className="flex items-center justify-center gap-4 p-4">
      <p>Tema: {context?.theme}</p>
      <button
        className="flex items-center justify-center bg-blue-800 text-white font-medium py-2 px-4 rounded-md gap-2 cursor-pointer"
        onClick={context?.toggleTheme}
      >
        Mudar tema
      </button>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}
