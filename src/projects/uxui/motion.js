const motion = { //todo projeto é necessário mudar o nome do const
  
    title: "Vector animation", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2023",
    // link: "genera.com.br", //opcional 
    color: "bg-[#212B36] dark:bg-[#292929]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/Cena37.gif`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/Cena38.gif`, //thumbnail
    description:
      "Some examples of vector animation I did for videos.",
    scope: "Motion Design",
    duration: "1 Month", //opcional
  
    contents: [
  
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/Cena13.gif",
          },
          {
            imgDuo:
            "../img/photos/Cena38.gif",
          },
        ],
      },
      
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/Cena42.gif",
          },
          {
            imgDuo:
            "../img/photos/Cena37.gif",
          },
        ],
      },
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/Cena50.gif",
          },
          {
            imgDuo:
            "../img/photos/motion3.gif",
          },
        ],
      },
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/motion1.gif",
          },
          {
            imgDuo:
            "../img/photos/motion2.gif",
          },
        ],
      },
      
      
  
      /*{
        //embed do vimeo
        vimeo: "https://player.vimeo.com/video/281909451?h=fdbdecd9de",
  
        caption: "legenda do vimeo",
      },*/
      
       
    
    ],
  };
  
  
  export default motion;
  