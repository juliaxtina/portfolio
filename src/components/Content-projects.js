import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Content() {
  const uxuiContext = require.context("../projects/uxui", false, /\.js$/);
  
  // Get an array of all project file paths
   const uxuiFilePaths = uxuiContext.keys();

  // Import each project dynamically

 


  const uxuiProjects = uxuiFilePaths.map((filePath) => {
    const projectData = uxuiContext(filePath);
    // Assuming each project file exports a default object
    return projectData.default;
  });


// Sort projects based on the 'year' property
const sortedProjects = uxuiProjects.sort((a, b) => {
  const yearA = parseInt(a.year, 10);
  const yearB = parseInt(b.year, 10);

  return yearB - yearA; // Sorting in descending order (newest first)
});



  const UXUI = ({ title, description, thumb, color, status }) => {
    return (
      <div className="mb-24 break-inside-avoid-column">
        <div class="transition ease-in duration-300 hover:-translate-y-4 w-full mb-6  relative">
        <img
          src={thumb}
          alt={title}
          className={` aspect-[4/3] object-cover object-center ${color} hover:opacity-80 hover:saturate-[.5] transition ease-in duration-300`}
        />
        {status  && (
                        <div class="absolute top-4 right-4 ">
                          
                       <span
                            className="bg-amber-400 inline-flex items-center rounded-full  text-slate-800 px-4 py-2">
                            <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                            {status}
                          </span>
                      </div>
                  )}

</div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    );
  };


  const tabs = [
    {
      classDefault:
        "inline-block p-4 border-b-2 rounded-t-lg ui-selected:text-slate-600 ui-selected:border-slate-600  ui-selected:active dark:ui-selected:text-slate-200 dark:ui-selected:border-slate-200 focus:outline-none ui-not-selected:border-transparent ui-not-selected:hover:text-gray-600 ui-not-selected:hover:border-gray-300 dark:ui-not-selected:hover:text-gray-300 transition ease-in-out duration-500",
    },
  ];

  const location = useLocation();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    // Atualiza o estado da guia com base nos dados do estado da localização
    const categoryFromState = location.state?.category;
    if (categoryFromState) {
      window.scrollTo(0, 650);
    }
    switch (categoryFromState) {
     
      case 'design':
        setActiveTabIndex(0);
        break;
    

        
      // Adicione mais casos conforme necessário

      // O caso padrão será 'social' se nenhum estado de categoria for fornecido
      default:
        setActiveTabIndex(0);
        break;
      
        window.scrollTo(0, 650);
    }
    
  }, [location.state]);

  return (
    <section class="text-gray-600 body-font bg-slate-50 dark:bg-slate-900/50 transition-colors duration-1000 ease-in-out py-24 lg:py-24">
      <div class="max-w-screen-xl px-5 mx-auto">
        <div class=" ">
          <Tab.Group selectedIndex={activeTabIndex} onChange={handleTabChange}>
            <Tab.Panels>
              <Tab.Panel>
                <>
                  <div class="flex flex-col">
                    <div class="flex flex-wrap sm:flex-row flex-col pb-24">
                      <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-gray-100">
                        UX/UI Projects
                      </h1>
                      <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
                      Explore a selection of design projects that showcase my skills and passion for design.
                      </p>
                    </div>
                  </div>
                  <div class="columns-1 lg:columns-2 lg:gap-24">
                    {sortedProjects.map((project, index) => (
                      <Link
                        key={index}
                        to={`/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <UXUI key={index} {...project} />
                      </Link>
                    ))}
                  </div>
                </>
              </Tab.Panel>
             
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}
