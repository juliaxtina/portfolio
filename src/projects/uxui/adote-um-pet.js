const adoteumpet = { //todo projeto é necessário mudar o nome do const
  
    title: "Adote um pet", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2023",
    // link: "genera.com.br", //opcional 
    color: "bg-[#5BE584] dark:bg-[#1B806A]", //cores do projeto, só escolher no tailwind
   image: `${process.env.PUBLIC_URL}/img/photos/cover-adote.jpg`, //imagem de fundo do hero
   thumb: `${process.env.PUBLIC_URL}/img/photos/thumb-pet.png`, //thumbnail
    description:
      "Adote um Pet was a case study done for a UX Design course. Is about a platform that allows users/NGOs to register animals available for adoption. ",
    scope: "User Interface, User Experience",
    duration: "3 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Adote um Pet is a platform where non-governmental organizations (NGOs) and individuals can register animals for adoption. Users have the option to sign up and request an animal through a form and terms of responsibility",
      },
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/pet.jpg",
          },
          {
            imgDuo:
            "../img/photos/mobilecelpet.jpg",
          },
        ],
      },
      
      
      {
        //embed do figma
        title: "Protótipo navegável",
        //description: "Adote um pet",
        figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpuMBVrTfQJopbRzZjcDR3f%2FONG%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D24-2%26viewport%3D-182%252C476%252C0.07%26t%3D6MMu5C1bYlPYluq2-1%26scaling%3Dscale-down%26starting-point-node-id%3D24%253A2%26show-proto-sidebar%3D1%26mode%3Ddesign",
        caption: "(Clique para interagir)",
      },
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/IdPet.jpg`
      },
      {
        //imagem tamanho padrão
        imgBig: `${process.env.PUBLIC_URL}/img/photos/Screenspet.jpg`
      },
    ],
  };
  

  
  export default adoteumpet;
  
