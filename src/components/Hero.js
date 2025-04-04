export function HeroBig() {
  return (
   <>
    <section>
    <div class="grid gap-40 max-w-screen-xl px-4 py-16 mx-auto lg:grid lg:grid-cols-2 lg:py-24 lg:px-6">
        <div class="mr-auto place-self-center">
            <h1 class="max-w-2xl my-6 text-7xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-gray-100">Júlia Pantaleão</h1>
          
            <div class="flex gap-x-4 text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400 font-body mt-8 mb-6">
            <span>🎨</span><p>UX/UI Designer</p>
            <span>📍</span><p>São Paulo</p>
          </div>
            
            <a href="/about" class="text-lg inline-flex items-center justify-center font-medium text-center text-indigo-600	 dark:text-gray-400">
            Get to know more about me
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
           
        </div>
                  
         <div class="lg:grid w-4/5 h-4/5 mt-8 hidden justify-end">
         <img src="/img/photos/profile.jpg" alt="thumb hero" className="rounded-xl mt-4 max-w-xs object-cover"/>
            
        </div>
    </div>
</section>
    </>
  )
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
