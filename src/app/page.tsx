"use client";

import Dashboard from "@/components/Dashboard";
import LoginForm from "@/components/LoginForm";
import ToolBar from "@/components/ToolBar";
import AuthContext from "@/context/AuthContext";
import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  return (
    <div className={context?.theme}>
      <ToolBar />
      <div className="flex w-full h-full justify-center">
        {authContext?.user ? <Dashboard /> : <LoginForm />}
      </div>
    </div>
  );
}
