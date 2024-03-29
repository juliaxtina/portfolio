const cosmos = { //todo projeto é necessário mudar o nome do const
  
    title: "Cosmos", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2022",
     link: "cosmossocial.com.br", //opcional 
    color: "bg-[#7A40D3] dark:bg-[#22255D]", //cores do projeto, só escolher no tailwind
   image: `${process.env.PUBLIC_URL}/img/photos/cover-cosmos.jpg`, //imagem de fundo do hero
   thumb: `${process.env.PUBLIC_URL}/img/photos/thumb-cosmos.jpg`, //thumbnail
    description:
      "Cosmos aims to assist social organizations through corporate volunteering.",
    scope: "User Interface",
    duration: "1 year and 3 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Product",
        description:
          "Cosmos is a Social Startup that emerged in 2020 with a clear purpose: to strengthen Social Organizations through volunteer programs. Offering opportunities for committed individuals to make a difference while also enhancing the management and performance of social organizations.",
      },
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/Cosmosimg.jpg",
          },
          {
            imgDuo:
            "../img/photos/Cosmosimg2.jpg",
          },
        ],
      },
      {
        //texto e descrição simples
        title: "Visual Identity",
      },
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/IdCosmos.jpg`
      },
      {
        //texto e descrição simples
        title: "UI Kit",
      },
      {
        //imagem tamanho padrão
        imgBig: `${process.env.PUBLIC_URL}/img/photos/UiKitCosmos.jpg`
      },
      {
        //texto e descrição simples
        title: "Some Screens of the platform",
      },
     /* {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/ScreenCosmos1.jpg`
      },
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/ScreenCosmos2.jpg`
      },
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/ScreenCosmos3.jpg`
      },*/
      {
        //imagem tamanho padrão
        imgBig: `${process.env.PUBLIC_URL}/img/photos/cosmospages.png`
      },
      {
        //texto e descrição simples
        title: "Landing Page",
      },
      /* {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/LandingCosmos.jpg`
      },*/
      {
        //embed do vimeo
        vimeo: "https://player.vimeo.com/video/927807546?",
  
        caption: "click to play",
      },
      
    
    ],
  };
  
  
  export default cosmos;
  
