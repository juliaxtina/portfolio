import Menu from "../components/Menu";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { trackGAEvent } from "../components/google-analytics";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {  
    useEffect(() => {
  document.title =  'Júlia Pantaleão - Contact';
}, []);

function handleSubmit(event) {
trackGAEvent("Contato", "Botão-CV", "Download CV");
}
  return (
    <>
      <div class="bg-slate-50 dark:bg-slate-800 *:transition-colors duration-1000 ease-in-out">
        <Menu />

        <section>
          <div class="py-24 px-4 max-w-screen-xl mx-auto lg:flex lg:gap-24 lg:mb-16">
            <div
              class="shrink transition ease-in duration-300 hover:opacity-80 lg:w-1/2 -my-8 bg-cover hidden lg:block" style={{backgroundImage: `url(../img/photos/42_1125x1500.jpg`}}
            />

            <div class="shrink lg:w-1/2">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Contact me
              </h2>

              <p class="mb-6  font-light text-balance text-gray-500 dark:text-gray-400 text-xl">
                Starting a new project? 
              </p>

              <a
                class="inline-flex items-center py-2.5 px-5 text-sm mb-12  text-slate-900 focus:outline-none bg-transparent rounded-full border border-slate-200 hover:bg-white focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 transition-colors duration-1000 ease-in-out"
                href="juliacristinap.santos@gmail.com"
                target="_blank" rel="noreferrer" onClick={() => handleSubmit("Contact", "cv-download", "button-cv")}
                download
              >
                <EnvelopeIcon className="h-6 w-6 me-2 " aria-hidden="true" />
                juliacristinap.santos@gmail.com
              </a>

              <Form />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
