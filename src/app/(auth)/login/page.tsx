import dynamic from "next/dynamic";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const DynamicFormAuth = dynamic(() => import("@/components/auth/FormAuth"), {
  loading: () => <p>Loading...</p>,
});

export default function LoginPage() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-lg font-semibold text-center">
          Bienvenido de vuelta a FeliTasks
        </h1>
        <h2 className="text-base text-center">
          Ingresa tu usuario y contraseña para continuar
        </h2>
      </div>

      <DynamicFormAuth type="login" />

      <div className="container lg:w-[28rem] flex justify-center items-center my-5">
        <div className="w-full">
          <Separator />
        </div>
      </div>

      <h3 className="text-sm mt-6">
        <Link href={"/register"}>
          ¿No tienes cuenta? <span className="font-semibold">Regístrate</span>
        </Link>
      </h3>
    </div>
  );
}