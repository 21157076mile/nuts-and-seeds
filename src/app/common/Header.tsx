export default function Header() {
  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6">
      <nav
        aria-label="Global"
        className="mx-auto container px-4 sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center py-8">
          <div className="absolute inset-x-0 bottom-0 h-px"></div>
          <a className="flex-none text-2xl font-semibold" href="/">
            <span className="animate-linear mb-20 bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_auto] bg-clip-text text-5xl font-bold text-transparent">l00000go</span>
          </a>

          <div className="ml-auto hidden lg:flex lg:items-center">
            <a href="/components">
              Nuts and Seeds
            </a>
            <a className="ml-8" href="/templates">
              Blog
            </a>
            <a className="ml-8" href="/documentation">
              Contact Us
            </a>
          </div>

          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
            <a href="/login">Sign in</a>
          </div>

          <button
            type="button"
            className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Open navigation</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
