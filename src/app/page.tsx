"use client";

import ToolBar from "@/components/ToolBar";
import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(ThemeContext);

  return (
    <div className={context?.theme}>
      <ToolBar />
      <div className="flex w-full h-full justify-center">
        <h1>Seja bem-vindo, usuário</h1>
      </div>
    </div>
  );
}
