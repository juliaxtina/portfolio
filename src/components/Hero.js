export function HeroBig() {
  return (
    <>
      <section className="py-32 px-6 lg:py-48">
        <div className="max-w-screen-xl mx-auto">
          {/* TÍTULO EM LARGURA TOTAL */}
          <h1 className="w-full mb-4 text-6xl font-semibold tracking-tight leading-tight md:text-6xl xl:text-7xl dark:text-gray-100 whitespace-nowrap">
            Hello, I'm Júlia Pantaleão
          </h1>

          {/* BIO MENOR */}
          <div className="text-gray-500 md:text-base lg:text-xl dark:text-gray-400 font-body mt-4 mb-10 max-w-4xl">
            <p>A UX/UI Designer helping brands turn ideas into functional and bold visual stories.</p>
          </div>

          {/* LINK */}
          <a
            href="/about"
            className="inline-flex items-center py-2.5 px-5 me-2 text-md font-medium text-white focus:outline-none bg-transparent rounded-full bg-indigo-600 hover:bg-indigo-800 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-indigo-600 dark:text-white dark:hover:text-white dark:hover:bg-indigo-800 mx-auto"
          >
            Get to know more about me
            {/* LINK <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            */}
          </a>
        </div>
      </section>
    </>
  );
}




const Title = ({ title, description, image }) => (
  <>
    <div className="grid gap-2 max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-3 lg:py-16 lg:px-6 lg:gap-24">
        <div className="col-span-2 mr-auto place-self-center">
    {title && (
      <div key={title} className="">
        <dt className="max-w-2xl my-6 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-gray-100 text-balance">
          {title}
        </dt>
        <dd className="max-w-2xl mb-6 mt-6 font-body text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400 text-balance">
        <em>{description}</em>
        </dd>
      </div>
    )}
    </div>
    {image && (
      <div key={image} className="">
         <img class="mt-4 aspect-square w-3/4 rounded-full object-cover saturate-50 hover:saturate-100 duration-300  transition-all" src={image}/>
      </div>
    )}
    </div>
  </>
);


export const HeroSmall = ({ titles }) => (
  <>
    <section>
    
          {titles.map((item) => (
            <Title key={item.title} title={item.title} description={item.description}  image={item.image} />
          ))}
        
        
     
    </section>
  </>
);
