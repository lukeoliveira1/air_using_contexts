import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const authContext = useContext(AuthContext);

  const onSubmit = (data: FormData) => {
    if (authContext) {
      authContext.login(data.username);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          className="w-full px-3 py-2 text-gray-500 border-gray-300 rounded-md outline-none ring-1 ring-gray-300"
          {...register("username", { required: false })}
        />
        <button className="flex items-center justify-center bg-emerald-400 text-white font-medium py-2 px-4 rounded-md gap-2 cursor-pointer">
          Login
        </button>
      </form>
    </>
  );
}
