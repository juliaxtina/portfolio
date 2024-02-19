const Cohabit = { //todo projeto é necessário mudar o nome do const
  
    title: "Cohabit", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2023",
    // link: "genera.com.br", //opcional 
    color: "bg-[#2B3DA1] dark:bg-[#080E4D]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/genera/teste-fundo.png`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/genera/Cover-teste.png`, //thumbnail
    description:
      "Cohabit is an application that connects people looking to share housing in a safe and efficient way.",
    scope: "User Interface, User Experience",
    duration: "3 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Shared housing is a common practice worldwide for various reasons: financial situation, moving due to college, a job in a larger city, high rental prices, or simply wanting to save money. However, for most people, finding an ideal roommate can cost time and dedication.",
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
  
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "../img/photos/roomate.jpg",
          },
          {
            imgDuo:
            "../img/photos/roomate2.jpg",
          },
        ],
      },
      
      
      
  
      {
        //embed do Canva
        
        canva: "https://www.canva.com/design/DAF8D-SZvL4/yR5bQFmP0Ivdjco0BB7b2g/view?embed",
        caption: "(Click to interact)",
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
        //texto e descrição simples
        title: "Final Screens",
        description:
          "The created solution is an application that connects people looking to share housing in a safe and efficient way. The platform allows users to filter by preferences such as gender, age, and hobbies to find compatible roommates. Users have the option to search directly for advertisements or search for people willing to share housing. The solution was developed based on data and information obtained through market research and interviews with potential users. The goal is to provide an effective and safe solution for people looking to share housing.",
      },
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/genera/cohabit.png`
      },
  
      {
        //imagem expandida
        imgBig: `${process.env.PUBLIC_URL}/img/genera/cohabit-img.png`
      },
  
      // Adicione mais itens de conteúdo conforme necessário
    
    ],
  };
  
  
  export default Cohabit;
  