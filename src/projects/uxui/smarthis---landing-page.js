const landingpage = { //todo projeto é necessário mudar o nome do const
  
    title: "Smarthis - Landing Page", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2023",
    // link: "genera.com.br", //opcional 
    color: "bg-[#212B36] dark:bg-[#292929]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/header-landing.jpg`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/cover-smarthis.png`, //thumbnail
    description:
      "Smarthis is a brazilian tech startup. My challenge was to create a intuitive landing page to showcase their solutions.",
    scope: "User Interface, User Experience",
    duration: "3 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Smarthis is a brazilian Tech Startup created to generate value through digital transformation, using the latest technological innovations to shape the organizations of the future. My challenge was to create a landing page presented in a intuitive way about what benefits the company could offer to the businness.",
      },
  
      /*{
        //texto com link
        credits: [
          {
            text: "Portfolio da julia",
          },
          {
            link: '<a href="http://behance.net/julinha">clique aqui</a>', //não esqueça de colocar http://
          },
        ],
      },*/
  
      /*{
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/roomate.jpg",
          },
          {
            imgDuo:
            "../img/photos/roomate2.png",
          },
        ],
      },*/
      
      
      
  
      {
        //embed do Canva
        
        // canva: "https://www.canva.com/design/DAF8D-SZvL4/yR5bQFmP0Ivdjco0BB7b2g/view?embed",
        // caption: "(Click to interact)",
      },

     /* {
        //embed do figma
        title: "Figma",
        description: "descrição do projeto no figma",
        figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19JvWq1o5248YNm5m2Gy4f%2FDesign-System---Genera%3Ftype%3Ddesign%26node-id%3D118-3516%26t%3D0foJRkUZbG7MQN2m-1",
        caption: "legenda do figma",
      },
  
      /*{
        //embed do vimeo
        vimeo: "https://player.vimeo.com/video/281909451?h=fdbdecd9de",
  
        caption: "legenda do vimeo",
      },*/
      
       {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/id-landing.jpg`
      },
  
      {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/landing-page.jpg`
      },
  
      // Adicione mais itens de conteúdo conforme necessário
    
    ],
  };
  
  
  export default landingpage;
  