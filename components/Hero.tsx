import { Transition } from "@tailwindui/react";
import { useState } from "react";
import { OpenConsultationOnClick } from "./Consultation";

const items = [
  { text: "Features", href: "#features" },
  { text: "Team", href: "#team" },
  { text: "Pricing", href: "#pricing" },
  { text: "FAQ", href: "#faq" },
];

function MobileMenu({
  show,
  handleClose,
  items,
}: {
  show: boolean;
  handleClose: () => void;
  items: { href: string; text: string }[];
}) {
  return (
    <Transition
      show={show}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
    >
      <div className="rounded-lg shadow-md">
        <div
          className="overflow-hidden bg-white rounded-lg shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <img className="w-auto h-8" src="/logo.png" />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Close menu"
                onClick={handleClose}
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map(({ href, text }) => (
              <a
                key={text}
                href={href}
                className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Transition>
  );
}

function Hero() {
  const [isShowingMobileMenu, setIsShowingMobileMenu] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-12 lg:pb-20">
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home">
                    <img
                      className="w-auto h-8 sm:h-10"
                      src="/logo.png"
                      alt="Logo"
                    />
                  </a>
                  <div className="flex items-center -mr-2 md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                      onClick={() => setIsShowingMobileMenu(true)}
                    >
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {items.map(({ href, text }) => (
                  <a
                    key={text}
                    href={href}
                    className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                  >
                    {text}
                  </a>
                ))}
                <OpenConsultationOnClick>
                  <a className="font-medium text-gray-500 transition duration-150 ease-in-out cursor-pointer hover:text-gray-900">
                    Schedule Consultation
                  </a>
                </OpenConsultationOnClick>
              </div>
            </nav>
          </div>
          <MobileMenu
            show={isShowingMobileMenu}
            handleClose={() => setIsShowingMobileMenu(false)}
            items={items}
          />
          <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:px-6 md:mt-16 lg:mt-20">
            <Transition
              appear
              show
              enter="transition-all transform ease-out duration-300 delay-300"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              className="text-center"
            >
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Websites for authors
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-tl from-orange-400 to-orange-500">
                  without the hassle
                </span>
              </h2>
              <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                You're an author and you need a website. You want it to be
                beautiful, fast, secure, <strong>and</strong> easy to update.
                With Authorize you don't have to choose.
              </p>
            </Transition>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="relative max-w-screen-xl px-4 pb-24 mx-auto sm:px-6">
            <Transition
              appear
              show
              enter="duration-300 transform delay-300 transition-all ease-out"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              className="relative"
            >
              <img
                className="relative w-full h-auto rounded-md shadow-2xl sm:rounded-lg"
                src="/screenshot.png"
                alt="App screenshot"
                height={970}
                width={1680}
              />
              <a
                href="https://demo.authorizewebsites.com"
                target="_blank"
                rel="noopener"
                className="focus:outline-none"
              >
                <button className="absolute inset-0 block w-full h-full focus:outline-none">
                  <div className="flex w-full h-full">
                    <div className="flex items-center justify-center w-full h-full p-4 text-xl font-extrabold text-transparent transition-all duration-300 ease-out bg-opacity-0 rounded-md sm:rounded-lg sm:text-2xl md:text-6xl hover:text-white hover:bg-opacity-50 hover:bg-black">
                      <h1 className="max-w-lg tracking-wide uppercase">
                        Check out the demo site
                      </h1>
                    </div>
                    <script> </script>
                  </div>
                </button>
              </a>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
