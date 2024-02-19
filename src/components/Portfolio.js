import { Link } from "react-router-dom";

const importFirstProject = (context) => {
  const firstFilePath = context.keys()[0];
  const projectData = context(firstFilePath);
  return projectData.default;
};

// Use require.context para importar dinamicamente o primeiro arquivo da pasta 'uxui'
const uxuiContext = require.context("../projects/uxui", false, /\.js$/);
const uxuiProject = importFirstProject(uxuiContext);


export default function Portfolio() {
  return (
    <>
      <section class="bg-slate-50 dark:bg-slate-900/50 transition-colors duration-1000 ease-in-out">
        <div class="px-4 py-24 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:gap-8 xl:gap-0 lg:py-48">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What have I been working on lately?
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400 text-balance">
            In a nutshell, my recent projects reflect a blend of creativity, technical expertise, and a passion for creating meaningful and impactful design experiences across various domains. Here are some of them:
            </p>
          </div>
          <div class="columns-1 lg:columns-3 lg:gap-24">
          <Link
              to={`/projects`} state={{category: "design" }}
            >
              <img
                src={uxuiProject.thumb}
                alt={uxuiProject.title}
                class={`transition ease-in duration-300 hover:opacity-80  w-full mb-2 object-cover  aspect-[12/11] object-left ${uxuiProject.color}`}
                alt="ux/ui projects"
              />
              <div class="break-inside-avoid-column">
                <h3 class="my-6 text-xl font-bold dark:text-white">
                UX/UI Projects
                </h3>
                <p class="text-gray-500 dark:text-gray-400 text-pretty">
                  {uxuiProject.description}
                </p>
              </div>
            </Link>
         

         
          </div>
        </div>
      </section>
    </>
  );
}
