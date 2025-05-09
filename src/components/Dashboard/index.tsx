import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Dashboard() {
  const authContext = useContext(AuthContext);

  if (!authContext || !authContext.user) {
    return <p>Carregando...</p>;
  }

  const handleLogout = () => {
    authContext.logout();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Bem vindo, {authContext.user}!</h1>
      <button
        className="flex items-center justify-center bg-gray-400 text-white font-medium py-2 px-4 rounded-md gap-2 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
