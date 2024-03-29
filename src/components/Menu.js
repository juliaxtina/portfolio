import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { trackGAEvent } from "./google-analytics";
import {
  Bars3Icon,
  CameraIcon,
  PaintBrushIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
const products = [
  {
    name: "Design",
    description: "Here are some design projects I've worked on recently.",
    href: "/projects",
    icon: PaintBrushIcon,
  },
  {
    name: "Photography",
    description:
      "Take a look at the amazing landscapes, pre-wedding photos, portraits and much more.",
    href: "/photos",
    icon: CameraIcon,
  },
];
/* const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
] */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function handleSubmit(category, action, label) {
  trackGAEvent(category, action, label);
}

const Menu = ({ className }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("color-theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.style.setProperty('--color-scheme-background', 'dark');     
    } else {
      setTheme("light");
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty('--color-scheme-background', 'light');
    }
  }, []);

  const handleThemeClick = () => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setTheme("light");
        document.documentElement.style.setProperty('--color-scheme-background', 'light');
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("color-theme", "dark");
        setTheme("dark");
        document.documentElement.style.setProperty('--color-scheme-background', 'dark');
      }
    } catch (error) {
      console.error("Error setting theme in local storage:", error);
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { projectName } = useParams();
  return (
    <header className={`${className}`}>
      <nav
        className="mx-auto flex max-w-7xl lg:py-10 items-center justify-between p-6 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Júlia Pantaleão</span>
            {projectName && (
                <>
                  <img
              className="size-16 w-auto  transition-all duration-1000 ease-in-out"
              src="/img/photos/flaticonlogo.png"
              alt="" onClick={() => handleSubmit("Menu", "menu-logo", "button-home")}
            />
                </>
              )}
            
              {!projectName && (
                <>
                  <img
              className="size-16 w-auto transition-all duration-1000 ease-in-out dark:brightness-110 "
              src="/img/photos/flaticonlogo.png" onClick={() => handleSubmit("Menu", "menu-logo", "button-home")}
              alt=""
            />
                </>
              )}

          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative ">
            

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/10 bg-white dark:bg-slate-900">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600  group-hover:text-slate-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block text-lg font-semibold text-gray-900 dark:text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="text-md mt-1 text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/*  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-slate-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-slate-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div> */}
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="/projects"
            className="text-lg font-semibold leading-6  text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200"
          >
           {projectName && (
                <>
                  <p class="text-white">Projects</p>
                                 </>
              )}

              {!projectName && (
                <>
                  <p class="text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200">
                    Projects</p>
                  
                 
                </>
              )}
          </a>
          <a
            href="/about"
            className="text-lg font-semibold leading-6  text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200"
          >
           {projectName && (
                <>
                  <p class="text-white">About me</p>
                                 </>
              )}

              {!projectName && (
                <>
                  <p class="text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200">
                    About me</p>
                  
                 
                </>
              )}
          </a>
          

          <SunIcon
            className="h-6 w-6 cursor-pointer hidden dark:block dark:text-white"
            aria-hidden="true"
            id="light"
            onClick={handleThemeClick}
          />
          <MoonIcon
            className="h-6 w-6 cursor-pointer dark:hidden block"
            aria-hidden="true"
            id="dark"
            onClick={handleThemeClick}
          />
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact"
            className="text-lg font-semibold leading-6  text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200"
          >
            {projectName && (
                <>
                  <p class="text-white">Contact <span aria-hidden="true">&rarr;</span></p>
                  
                </>
              )}

              {!projectName && (
                <>
                  <p class="text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200">
                    Contact <span aria-hidden="true">&rarr;</span></p>
                </>
              )} 
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-slate-800 text-base">
          <div className="flex items-center justify-between ">
            {mobileMenuOpen ? (
              <div>
                <SunIcon
                  className="h-6 w-6 text-gray-400 cursor-pointer hidden dark:block"
                  aria-hidden="true"
                  id="lightmobile"
                  onClick={handleThemeClick}
                />
                <MoonIcon
                  className="h-6 w-6 cursor-pointer dark:hidden block"
                  aria-hidden="true"
                  id="darkmobile"
                  onClick={handleThemeClick}
                />
              </div>
            ) : null}

            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Júlia Pantaleão</span>
              <img
                className="h-8 w-auto"
                src="/img/photos/flaticonlogo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-1000 ease-in-out"
                >
                  Projects
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-1000 ease-in-out"
                >
                  About me
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-400 hover:bg-slate-50 transition-colors duration-1000 ease-in-out"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Menu;
