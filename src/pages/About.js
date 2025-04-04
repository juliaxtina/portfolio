import Menu from "../components/Menu";
import { HeroSmall } from "../components/Hero";
import Footer from "../components/Footer";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useEffect } from "react";
import { trackGAEvent } from "../components/google-analytics";

const About = () => {
  useEffect(() => {
    document.title =  'Julia Pantaleão - About me';
  }, []);
  
  function handleSubmit(category, action, label) {
    trackGAEvent(category, action, label);
  }
  const HeroSmallTitle = [
    {
      title: "About me",
      description:
        "A glimpse into my design journey.",
      image: "../img/photos/profile.jpg",
    },
    /* { title: 'Title 2', description: 'Description 2' }, */
    // Add more items as needed
  ];
  return (
    <>
      <div class="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out">
        <Menu />
        <HeroSmall titles={HeroSmallTitle} images={HeroSmallTitle} />
        <section class="text-gray-600 text-md bg-slate-50 dark:bg-slate-900/50 py-8 lg:py-24 transition-colors duration-1000 ease-in-out">
          <div class="max-w-screen-xl px-5 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:gap-24">
              <div class="col-span-2">
                
                <p class="mt-3 mb-8 sm:text-xl leading-relaxed text-base  dark:text-gray-400 text-balance">
                Hi! My name is Júlia, and I'm a designer who started playing around with web design when I was just 12 years old (yes, back in the days when we spent hours customizing Tumblr with glitter, gifs, tons of copied code from the internet, and endless questions on StackOverflow forums).
</p>
<p class="mt-3 mb-8 sm:text-xl leading-relaxed text-base  dark:text-gray-400 text-balance">
After high school, I enrolled in a technical course in IT, where I learned how to build a website from scratch — from HTML to JavaScript. That’s when I really started to understand what happens “behind the curtain” and fell in love with this world. But over time, I realized that while I enjoyed making things work, what truly fascinated me was thinking about how things looked, behaved, and connected with people.
</p>
<p class="mt-3 mb-8 sm:text-xl leading-relaxed text-base  dark:text-gray-400 text-balance">
I’ve always been a very visual person — one of those kids who’s been doodling in the corners of notebooks since forever (and still does). After the course, I started studying design more seriously, diving into everything related to visual creation and digital experiences. In addition to UX/UI, I’m also passionate about digital illustration — if you're curious about that side of me, feel free to check out my work on <a href="https://instagram.com/juliaxtina" >Instagram.</a>
</p>
<p class="mt-3 mb-8 sm:text-xl leading-relaxed text-base  dark:text-gray-400 text-balance">
Today, I work on creating meaningful experiences, designing interfaces that tell stories, make people’s lives easier, and turn navigation into something smooth and elegant.

If you also believe that design is about connecting people, I think we’re already on the same page. ✨
</p>
          
              </div>
              <div class="">
                {/* linguas */}

                <div class="flex gap-4 mt-6">
                  <div class="group relative h-full cursor-pointer align-middle ">
                    <div class="absolute invisible bottom-7 group-hover:visible w-max bg-slate-700  text-black px-4 mb-6 -ms-2 py-1.5 text-sm rounded-md">
                      <p class=" leading-2 text-gray-200 pt-2 pb-2">
                        {" "}
                        Native language
                      </p>
                      <svg
                        class="absolute z-10  bottom-[-10px] "
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10L0 0L16 1.41326e-06L8 10Z"
                          class="fill-slate-700"
                        />
                      </svg>
                    </div>
                    <span class="fi-br rounded-md aspect-[4/3] w-8 inline-block bg-no-repeat"></span>
                  </div>
                  <div class="group relative h-full cursor-pointer align-middle ">
                    <div class="absolute invisible bottom-7 group-hover:visible w-max bg-slate-700 text-black px-4 mb-6 -ms-2 py-1.5 text-sm rounded-md">
                      <p class=" leading-2 text-gray-200 pt-2 pb-2">
                        {" "}
                        Advanced
                      </p>
                      <svg
                        class="absolute z-10  bottom-[-10px] "
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10L0 0L16 1.41326e-06L8 10Z"
                          class="fill-slate-700"
                        />
                      </svg>
                    </div>
                    <span
                      class="fi-us rounded-md aspect-[4/3] w-8 inline-block bg-no-repeat"
                      id="us"
                    ></span>
                  </div>
                  
                  <div class="group relative h-full cursor-pointer align-middle ">
                    <div class="absolute invisible bottom-7 group-hover:visible w-max bg-slate-700 text-black px-4 mb-6 -ms-2 py-1.5 text-sm rounded-md">
                      <p class=" leading-2 text-gray-200 pt-2 pb-2"> Basic</p>
                      <svg
                        class="absolute z-10  bottom-[-10px] "
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 10L0 0L16 1.41326e-06L8 10Z"
                          class="fill-slate-700"
                        />
                      </svg>
                    </div>
                    <span
                      class="fi-es rounded-md aspect-[4/3] w-8 inline-block bg-no-repeat"
                      id="es"
                    ></span>
                  </div>
                </div>

                <p class="lg:text-lg leading-relaxed font-medium my-6 dark:text-gray-400">
                  Júlia Pantaleão
                  <br />
                  <a
                    href="mailto:juliacristinap.santos@gmail.com"
                    class="text-gray-600 underline dark:text-gray-400 hover:no-underline"
                  >
                    juliacristinap.santos@gmail.com
                  </a>
                  <br />
                  São Paulo, Brazil
                </p>

                <a
                  class="inline-flex items-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-slate-200 hover:bg-white focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700"
                  href="../pdf/CV julia.pdf"
                  target="_blank" onClick={() => handleSubmit("About", "cv-download", "button-cv")}
                  download
                >
                  Download my CV
                  <ArrowDownTrayIcon
                    className="h-6 w-6 ms-2 "
                    aria-hidden="true"
                  />
                </a>
                <div class="">
                {/* linguas */}
                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  My space 💻</h3>
                  <img src={`${process.env.PUBLIC_URL}/img/photos/desktop.jpeg`} alt="Workspace" className="rounded-xl mt-4" />
              </div>
              
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3  mt-24 lg:gap-24 dark:text-gray-400">
              <div class="">
                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Work Experience
                </h3>

                <h5 class="font-bold mt-4">UX/UI Desifner</h5>
                <p>Opea Capital</p>

                <h5 class="font-bold mt-4">User Interface Designer</h5>
                <p>Smarthis</p>

                <h5 class="font-bold mt-4">UX/UI Designer</h5>
                <p>SuperOpa</p>

                <h5 class="font-bold mt-4">Digital Designer</h5>
                <p>Degrau Publicidade</p>

                <h5 class="font-bold mt-4">Digital Designer</h5>
                <p>Brand Connect</p>

                <h5 class="font-bold mt-4">Front-End Developer</h5>
                <p>Groove Company</p>

              </div>
              <div class="">
                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Barchelor Degree
                </h3>

                <h5 class="font-bold mt-4">Graphic Design</h5>
                <p>Universidade Cidade de São Paulo</p>


                <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Professional courses
                </h3>

                <h5 class="font-bold mt-4">Google UX Design </h5>
                <p>Coursera</p>
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/X73BFG4TU7JR" class="hover:underline" target="_blank">Credential</a>

                <h5 class="font-bold mt-4">Programming and Webdesign</h5>
                <p>Etec de Praia Grande</p>

                
              </div>
              <div class="">
                {/* <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Habilities
                </h3>
                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">UX/UI</h5>
                </div>
                

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Photography</h5>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-cyan-500 h-1.5 rounded-full dark:bg-cyan-600"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Social Media</h5>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-cyan-500 h-1.5 rounded-full dark:bg-cyan-600"
                    style={{ width: "80%" }}
                  ></div>
                </div>

                <div class="flex justify-between">
                  <h5 class="font-bold mb-2">Video Editing / VFX / Motion</h5>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 mb-6 dark:bg-slate-700">
                  <div
                    class="bg-cyan-500 h-1.5 rounded-full dark:bg-cyan-600"
                    style={{ width: "60%" }}
                  ></div>
                </div> */}

                <div>
                  <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Skills
                  </h3>
                  <ul class="flex flex-wrap *:text-sm gap-2 *:font-medium *:w-max *:rounded-full *:border *:text-gray-600 *:border-slate-600/20 *:bg-slate-100 *:px-2 *:py-0.5 *:dark:text-gray-400 dark:*:border-slate-400/20 dark:*:bg-slate-400/10 ">
                    <li>User Experience</li>
                    <li>Design System</li>
                    <li>Design Thinking</li>
                    <li>Front End</li>
                    <li>Visual Design</li>
                  </ul>
                </div>
                <div>
                  <h3 class="mb-4 mt-8 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Softwares
                  </h3>
                  <ul class="flex flex-wrap *:text-sm gap-2  *:font-medium *:w-max *:rounded-full *:border *:text-gray-600 *:border-slate-600/20 *:bg-slate-100 *:px-2 *:py-0.5 *:dark:text-gray-400 dark:*:border-slate-400/20 dark:*:bg-slate-400/10 ">
                    <li>Figma</li>
                    <li>XD</li>
                    <li>Miro</li>
                    <li>Maze</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Mouseflow</li>
                    <li>After Effects</li>
                    <li>Notion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
