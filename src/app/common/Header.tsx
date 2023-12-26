import dynamic from "next/dynamic";

const SignInHeader = dynamic(() => import("./SignInHeader"), { ssr: false });
const NavMenuMb = dynamic(() => import("./NavMenuMb"), { ssr: false });

export default function Header() {
  return (
    <header className="relative z-5 w-full flex-none text-sm font-semibold leading-6">
      <nav
        aria-label="Global"
        className="mx-auto container px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center py-5 ">
          <a className="flex-none text-2xl font-semibold" href="/">
            <span className="animate-linear mb-20 bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_auto] bg-clip-text text-5xl font-bold text-transparent">
              l00000go
            </span>
          </a>

          <div className="ml-auto hidden lg:flex lg:items-center">
            <a
              href="/nuts-and-seeds"
              className="hover:text-sky-500 dark:hover:text-sky-400"
            >
              Nuts and Seeds
            </a>
            <a
              className="ml-8 hover:text-sky-500 dark:hover:text-sky-400"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="ml-8 hover:text-sky-500 dark:hover:text-sky-400"
              href="/contact-us"
            >
              Contact Us
            </a>
            <div className="lg:ml-8 flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
              <SignInHeader />
            </div>
          </div>
        </div>

        <NavMenuMb />
      </nav>
    </header>
  );
}
