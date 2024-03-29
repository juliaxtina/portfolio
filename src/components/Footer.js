import {  EnvelopeIcon, } from "@heroicons/react/24/outline";
import { trackGAEvent } from "./google-analytics";

export default function Footer() {
  function handleSubmit(category, action, label) {
    trackGAEvent(category, action, label);
  }
  return (
    <footer class="bg-white dark:bg-slate-900 transition-colors duration-1000 ease-in-out">
      <div class="mx-auto max-w-7xl px-6 2xl:px-0 py-16 lg:pt-24">
        <div class="lg:flex md:justify-between">
          <div class="mb-16 lg:mb-6">
            <a href="/" class="flex items-center">
              <img
                className="size-16 w-auto transition-all duration-1000 ease-in-out me-2 mb-1 "
                src="/img/photos/flaticonlogo.png"
                alt=""
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ®
              </span>
            </a>
          </div>
          <div class="lg:grid grid-cols-1 gap-24 lg:grid-cols-2">
            <div class="lg:inline-flex gap-24">
              <div class="mb-16 lg:mb-6">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Explore
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/about" class="hover:underline">
                      About me
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/projects" class="hover:underline">
                      Design Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-16 lg:mb-6">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow me
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://be.net/juliaxtina" class="hover:underline ">
                      Behance
                    </a>
                  </li>
                 
                  <li class="mb-4">
                    <a
                      href="https://instagram.com/juliaxtina"
                      class="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li class="">
                    <a
                      href="https://linkedin.com/in/juliacristina"
                      class="hover:underline "
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mb-16 lg:mb-6">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 ">
                  <a
                    href="juliacristinap.santos@gmail.com"
                    class="hover:underline cursor-pointer flex gap-2"
                  >
                    <EnvelopeIcon className="w-5" />
                    juliacristinap.santos@gmail.com
                  </a>
                </li>
                <li class="">
                  or fill the forms at the{" "}
                  <a
                    href="/contact"
                    class="hover:no-underline underline cursor-pointer inline-flex"
                  >
                    contact page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="lg:mt-32 my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm inline-flex items-center text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Júlia Pantaleão™. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="http://linkedin.com/in/juliacristina"
              class="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white ms-2"
              onClick={() => handleSubmit("Footer", `social-linkedin`, "social-icon")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-linkedin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.35"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <span class="sr-only">LinkedIn</span>
            </a>
            <a
              href="http://instagram.com/juliaxtina"
              class="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white ms-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.35"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
              <span class="sr-only">Instagram account</span>
            </a>
            <a
              href="http://dribbble.com/juliaxtina"
              class="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white ms-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-dribbble"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.35"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
                <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
              </svg>
              <span class="sr-only">Dribbble account</span>
            </a>
            <a
              href="http://be.net/juliaxtina"
              class="text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:dark:text-white ms-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-behance"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.35"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                <path d="M3 12l4.5 0" />
                <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                <path d="M16 6l3 0" />
              </svg>
              <span class="sr-only">Behance account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
