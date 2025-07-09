export function HeroBig() {
  return (
    <>
      <section className="py-32 px-6 lg:py-48">
        <div className="max-w-screen-xl mx-auto">
          {/* TÍTULO EM LARGURA TOTAL */}
          <h1 className="w-full mb-4 text-6xl font-semibold tracking-tight leading-tight md:text-6xl xl:text-7xl dark:text-gray-100">
            Hello, I'm Júlia Pantaleão
          </h1>

          {/* BIO MENOR */}
          <div className="text-gray-500 md:text-base lg:text-xl dark:text-gray-400 font-body mt-4 mb-10 max-w-4xl">
            <p>A UX/UI Designer helping brands turn ideas into functional and bold visual stories.</p>
          </div>

          {/* LINK */}
          <a
            href="/about"
            className="inline-flex items-center py-2.5 px-5 me-2 text-md font-medium text-white focus:outline-none bg-indigo-600 rounded-full bg-indigo-600 hover:bg-indigo-800 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-indigo-600 dark:text-white dark:hover:text-white dark:hover:bg-indigo-800 mx-auto"
          >
            Get to know more about me
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
        <dt className="max-w-2xl my-6 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl dark:text-gray-100 text-balance">
          {title}
        </dt>
        <dd className="max-w-2xl mb-6 mt-6 font-body text-gray-500 lg:mb-8 text-base lg:text-lg dark:text-gray-400 text-balance">
        {description}
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
