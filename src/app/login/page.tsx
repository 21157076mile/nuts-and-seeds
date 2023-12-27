import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("./login-form"), { ssr: false });

export default function Login() {

  return (
    <main className="flex sm:min-h-screen flex-col items-center dark:bg-slate-800">
      <div className="flex w-full min-h-full flex-1 flex-col justify-center pt-10 sm:pt-0 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <a className="text-2xl font-semibold mx-auto h-10 w-auto" href="/">
            <span className="animate-linear mb-20 bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_auto] bg-clip-text text-5xl font-bold text-transparent">l00000go</span>
          </a>
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight">
            Login Form
          </h2>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
