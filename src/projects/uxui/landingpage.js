const landingpage = { //todo projeto é necessário mudar o nome do const
  
    title: "Smarthis - Landing Page", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2023",
    link: "be.smarthis.com/rpa", //opcional 
    color: "bg-[#212B36] dark:bg-[#292929]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/header-landing.jpg`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/cover-smarthis.png`, //thumbnail
    description:
      "Smarthis is a brazilian tech startup. My challenge was to create a intuitive landing page to showcase their solutions.",
    scope: "User Interface, User Experience",
    duration: "1 Month", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Smarthis is a brazilian Tech Startup created to generate value through digital transformation, using the latest technological innovations. My challenge was to create a landing page presented in a intuitive way about what benefits the company could offer to the businness.",
      },
      {
        //texto e descrição simples
        title: "The Goal",
        description:
          "The objective of the landing page was to promote one of the services that Smarthis offers in order to reach new leads.",
      },
      {
        //texto e descrição simples
        title: "The Process",
        description:
        "I utilized the LIFT framework for landing pages, which incorporates the 6 conversion methods: Value Proposition, Clarity, Relevance, Distraction, Urgency, and Anxiety.",
      },
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/lift.jpg`
      },
     
      
      
        {
          title: "A/B Test",
          description:
            "An A/B test was conducted to determine which type of layout would generate higher user engagement, with the first (A) having the form as the last section, and the second (B) having the form as the last section. The difference was: a 317% conversion rate in the first option (A).",
          },
          {
            //imagem tamanho padrão
            img: `${process.env.PUBLIC_URL}/img/photos/abtest.jpg`
          },
      
      {
        title: "Visual Identity",
        description:
          "For the visual identity, I adhered to the company's color palette but focused on a more subdued design than they are accustomed to using, thus attempting to convey more seriousness. I used photos of people to humanize and bring closer to the target user.",
        },
        {
          title: "Development",
          description:
            "The development was done by myself on the RD Station platform. The layout is implemented in a low-code manner, but not everything can be achieved through the platform, (such as carrossels and boxes) therefore, some parts need to be implemented using code (HTML, CSS, JS).",
          },
       {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/id-landing.jpg`
      },
  
      {
        title:"Final Screen",
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/landing-page.jpg`
      },
  
      {
        title: "Results",
        description:
          "With this material, the marketing team achieved a 33% conversion rate, reaching a total of 38 leads. It was distributed to potential customers through social media and paid advertising. The layout of the landing page was used to promote two additional services offered by the company.",
        },
    
    ],
  };
  
  
  export default landingpage;
  