import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import ImageFull from "../components/ImageFull";
import Footer from "../components/Footer";
import { LinkIcon } from "@heroicons/react/24/outline";
import RecentProjects from "./recentprojects";
import * as Icons from "@heroicons/react/24/outline";

// Use require.context to dynamically import all files within './projects'
const uxuiContext = require.context("../projects/uxui", false, /\.js$/);

// Get an array of all project file paths
const uxuiFilePaths = uxuiContext.keys();

// Import each project dynamically
const uxuiProjects = uxuiFilePaths.map(
  (filePath) => uxuiContext(filePath).default
);

const ProjectPage = () => {
  const { projectName } = useParams();
  const [projectFolder, setProjectFolder] = useState("");

  useEffect(() => {
    const checkFilePath = (filePath, folder) => {
      const lowerCaseFilePath = filePath.toLowerCase();
      return lowerCaseFilePath.includes(folder.toLowerCase());
    };

    const findProjectFolder = (projectName) => {
      const isFoundInUxui = uxuiFilePaths.some((filePath) =>
        checkFilePath(filePath, projectName)
      );

      if (isFoundInUxui) {
        return "uxui";
      } else {
        return "Pasta não encontrada";
      }
    };

    const projectFolder = findProjectFolder(projectName);
    setProjectFolder(projectFolder);


    // Scroll to the top when the component mounts or the projectName changes
    window.scrollTo(0, 0);
  }, [projectName]);

  // Find the corresponding project based on the title (not an id)
  const project = uxuiProjects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectName
  );

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div>
      <ImageFull
        image={project.image}
        altText={project.title}
        color={project.color}
      />
      <Menu className="absolute top-0 w-full *:text-white bg-gradient-to-b from-black/30 " />
      <div class="bg-white dark:bg-slate-800 transition-colors duration-1000 ease-in-out" id="content">
        <div class=" mx-auto max-w-screen-xl py-16 px-6 2xl:px-0 lg:gap-8 xl:gap-8 lg:pt-32">
          <div class="d-block lg:grid grid-cols-1 lg:grid-cols-5">
            <div class="max-w-screen-md mb-8 lg:mb-16 col-span-4">
              <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p class="mt-8 text-gray-500 sm:text-xl dark:text-gray-400 text-balance">
                {project.description}
              </p>
              {project.link && (
                <>
                  <a
                    href={"http://" + project.link}
                    class="mt-8 text-gray-900 dark:text-gray-400 text-center flex gap-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />{" "}
                    Visit their website
                  </a>
                </>
              )}
            </div>
            <div class="max-w-screen-md mb-8 lg:mb-16">
              <div class="mb-4 text-gray-500 dark:text-gray-400">
                <label class="font-bold text-gray-900 dark:text-gray-200">
                  Year:
                </label>
                <br />
                {project.year}
              </div>
              <div class="mb-4 text-gray-500 dark:text-gray-400">
                <label class="font-bold text-gray-900 dark:text-gray-200">
                  Scope:
                </label>
                <br />
                {project.scope &&
                  project.scope.split(",").map((scope, index) => (
                    <span
                      key={index}
                      className="flex flex-wrap gap-2 w-max rounded-full bg-gray-50 text-gray-800 my-2 px-2.5 py-0.5   dark:bg-gray-700 dark:text-gray-200"
                    >
                      {scope.trim()}{" "}
                      {/* Use trim to remove any leading or trailing whitespace */}
                    </span>
                  ))}
                  
              </div>
              <div class="mb-4 text-gray-500 dark:text-gray-400">
                <label class="font-bold text-gray-900 dark:text-gray-200">
                  Type:
                </label>
                <br />
              {project.type &&
                  project.type.split(",").map((type, index) => (
                    <span
                      key={index}
                      className="flex flex-wrap gap-2 w-max rounded-full bg-gray-50 text-gray-800 my-2 px-2.5 py-0.5   dark:bg-gray-700 dark:text-gray-200"
                    >
                      {type.trim()}{" "}
                      {/* Use trim to remove any leading or trailing whitespace */}
                    </span>
                  ))}
                  </div>
              {project.duration && (
                <>
                  <div class="mb-4 text-gray-500 dark:text-gray-400">
                    <label class="font-bold text-gray-900 dark:text-gray-200">
                      Duration:
                    </label>
                    <br />
                    {project.duration}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <hr class="border-gray-200 mx-auto dark:border-gray-700" />

        <div class="bg-white dark:bg-slate-800 mx-auto w-full mt-8 lg:mt-24 mb-32 lg:mb-32 px-6 xl:px-0 ">
          <div class="flex justify-between mx-auto ">
            <article class="mx-auto w-full">
              {project.contents &&
                project.contents.map((content, index) => (
                  <div key={index}>
                  
                    {content.title && (
                      <>
                        <section>
                          <div className="w-full px-6 lg:px-0 lg:max-w-7xl mx-auto">
                            <h2 className="mt-16 mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                              {content.title}
                            </h2>
                            {/* Novo subtitle logo abaixo do título */}
                          {content.subtitle && (
                            <h3 className="mb-6 text-lg font-bold text-[#2B3DA1] dark:text-[#2B3DA1]">
                              {content.subtitle}
                            </h3>
                          )}
                          </div>
                        </section>
                      </>
                    )}
                    {content.description && (
                      <>
                        <section>
                          <div className="w-full px-6 lg:px-0 lg:max-w-7xl mx-auto ">
                            <p className="mb-6 text-gray-600 sm:text-xl dark:text-gray-400 text-pretty">
                              {content.description}
                              
                            </p>
                          </div>
                        </section>
                      </>
                      
                    )}
                    
                    {content.quote && (
                        <section>
                          <div className="lg:max-w-3xl mx-auto w-full">
                            <blockquote className="my-6 text-center">
                              <span className="text-indigo-600 dark:text-indigo-400 text-5xl leading-none mr-2">“</span>
                              <span className="italic text-gray-600 dark:text-gray-300 text-xl sm:text-3xl">
                                {content.quote}
                              </span>
                              <span className="text-indigo-600 dark:text-indigo-400 text-5xl leading-none ml-2">”</span>
                              {content.author && (
                                <footer className="text-sm not-italic text-gray-500 dark:text-gray-400 mt-2">
                                  — {content.author}
                                </footer>
                              )}
                            </blockquote>
                          </div>
                        </section>
                      )}

                  
                  
                    {content.credits && (
                      <section>
                        <div className="w-full px-6 lg:px-0 lg:max-w-7xl mx-auto">
                          <p className="mb-6 text-gray-500 sm:text-xl dark:text-gray-400 text-pretty">
                            {content.credits.map((credit, creditsIndex) => (
                              <span key={creditsIndex}>
                                {credit.text}
                                {credit.link && (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: credit.link,
                                    }}
                                  />
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </section>
                    )}

                    {content.columns && (
                      <>
                        <div className="w-full px-6 lg:px-0 lg:max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8 lg:py-8 py-3">
                          {content.columns.map((column, columnIndex) => (
                            <span
                              key={columnIndex}
                              class="d-block w-full bg-slate-100/80 py-4 px-6 rounded-lg"
                            >
                              {column.icon &&
                                (() => {
                                  const IconComponent = Icons[column.icon];
                                  return (
                                    <p className="text-gray-400 text-sm my-2">
                                      <IconComponent className="size-6 text-[#2B3DA1]" />
                                    </p>
                                  );
                                })()}

                                <p class="font-bold text-grey-900 my-2">
                                {column.title}
                              
                              {/* Se existir bigNumber, mostra com estilo maior */}
                              {column.bigNumber && (
                                <p className="text-5xl font-extrabold text-grey-900 my-2">
                                  {column.bigNumber}
                                </p>
                              )}
                                
                              </p>
                              <p class="text-gray-800 text-sm my-2">
                                {column.text}
                              </p>
                              {column.aditional && (
                                <p class="text-gray-400 text-sm my-2">
                                  {column.aditional}
                                </p>
                              )}
                            </span>
                            
                          ))}
                        </div>
                      </>
                    )}
 {/* Inline columns */}
{content.inlineColumns && (
  <div className="w-full px-6 lg:px-0 lg:max-w-7xl mx-auto flex flex-wrap gap-6 lg:gap-16 py-8 justify-center">
    {content.inlineColumns.map((column, columnIndex) => (
      <div
        key={columnIndex}
        className="w-full lg:w-auto flex-1 min-w-[240px] max-w-md"
      >
         {/* Número grande */}
        {column.bigNumber && (
          <p className="text-4xl font-extrabold text-grey-900 mb-2 dark:text-white">
            {column.bigNumber}
          </p>
        )}
        {/* Ícone */}
        {column.icon &&
          (() => {
            const IconComponent = Icons[column.icon];
            return (
              <p className="text-gray-400 text-sm mb-2">
                <IconComponent className="size-6 text-[#2B3DA1]" />
              </p>
            );
          })()}
{column.description && (
                      <>
                        <section>
                          <div className="w-full px-6 lg:px-0 lg:max-w-7xl mx-auto ">
                            <p className="mb-6 text-gray-600 sm:text-xl dark:text-gray-400 text-pretty">
                              {column.description}
                              
                            </p>
                          </div>
                        </section>
                      </>
                      
                    )}
        {/* Imagem */}
        {column.img && (
          <img
            src={column.img}
            alt={column.title || ""}
            className="mb-4 w-full object-cover rounded-md border border-slate-200 dark:border-slate-700"
          />
        )}

        {/* Título */}
        <p className="font-bold text-grey-900 mb-2 dark:text-white">{column.title}</p>

       

        {/* Texto descritivo */}
        {column.text && (
          <p className="text-gray-800 dark:text-gray-400 text-sm mb-2">
            {column.text}
          </p>
        )}

        {/* Texto adicional */}
        {column.aditional && (
          <p className="text-gray-400 text-sm mb-2">{column.aditional}</p>
        )}

        {/* Citação */}
        {column.quote && (
          <blockquote className="italic text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-4 relative">
            <span className="text-indigo-600 dark:text-grey-900 text-4xl leading-none mr-1">“</span>
            {column.quote}
            <span className="text-indigo-600 dark:text-grey-900 text-4xl leading-none ml-1">”</span>
            {column.author && (
              <footer className="text-xs not-italic text-gray-500 dark:text-gray-400 mt-1">
                — {column.author}
              </footer>
            )}
          </blockquote>
        )}
      </div>
    ))}
  </div>
)}


                    {content.img && (
                      <>
                        <section>
                          <div className="lg:max-w-7xl mx-auto w-full lg:py-16 py-3">
                            <img
                              src={content.img}
                              alt=""
                              className="w-full border-[1px] border-slate-50 dark:border-slate-900/40 bg-slate-50 dark:bg-slate-900/60"
                            />
                          </div>
                        </section>
                      </>
                    )}
                    {content.imgBig && (
                      <>
                        <section>
                          <div className="lg:max-w-screen-2xl mx-auto w-full lg:py-16 py-3">
                            <img
                              src={content.imgBig}
                              alt=""
                              className="w-full border-[1px] border-slate-50 dark:border-slate-900/40 bg-slate-50 dark:bg-slate-900/60"
                            />
                          </div>
                        </section>
                      </>
                    )}

                    {content.Duo && (
                      <>
                        <section>
                          <div className="max-w-screen-xl mx-auto columns-1 lg:columns-2 lg:gap-32">
                            {content.Duo.map((duo, duoIndex) => (
                              <div
                                key={duoIndex}
                                className="grid max-w-screen-2xl mx-auto lg:py-16 py-3"
                              >
                                <div className="mr-auto place-self-center w-full">
                                  {/* TÍTULO DA IMAGEM */}
                                  {duo.title && (
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white text-left">
                                      {duo.title}
                                    </h3>
                                  )}
                                  <img
                                    src={duo.imgDuo}
                                    alt=""
                                    className="w-full lg:h-[550px] object-cover border-[1px] border-slate-50 dark:border-slate-900/40 bg-slate-50 dark:bg-slate-900/60"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      </>
                    )}

                    {content.figma && (
                      <>
                        <section>
                          <div className="mr-auto w-full lg:max-w-screen-2xl py-3 lg:py-16 mx-auto">
                            <iframe
                              src={content.figma}
                              allowfullscreen
                              class="w-full h-lvh border-2 border-slate-50 dark:border-slate-800"
                            ></iframe>
                            <h6 class="mt-4 text-gray-700  dark:text-gray-400 text-center ">
                              {content.caption}
                            </h6>
                          </div>
                        </section>
                      </>
                    )}

                    {content.canva && (
                      <>
                        <section>
                          <div className="mr-auto w-full lg:max-w-screen-2xl py-3 lg:py-16 mx-auto">
                            <iframe
                              src={content.canva}
                              allowfullscreen
                              class="w-full aspect-video border-2 border-slate-50 dark:border-slate-800"
                            ></iframe>
                            <h6 class="mt-4  text-gray-700  dark:text-gray-400 text-center">
                              {content.caption}
                            </h6>
                          </div>
                        </section>
                      </>
                    )}

                    {content.vimeo && (
                      <>
                        <section>
                          <div className="mr-auto w-full lg:max-w-screen-2xl py-3 lg:py-16 mx-auto">
                            <iframe
                              src={
                                content.vimeo +
                                "&title=0&byline=0&portrait=0&sidedock=0"
                              }
                              class="w-full aspect-video border-2 border-slate-50 dark:border-slate-800"
                              frameborder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                            <h6 class="mt-4  text-gray-700  dark:text-gray-400 text-center">
                              {content.caption}
                            </h6>
                          </div>
                        </section>
                      </>
                    )}
                  </div>
                ))}
            </article>
          </div>
        </div>

        <RecentProjects
          currentProject={`./${projectFolder}/${projectName}.js`}
        />

        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
