const Cohabit = { //todo projeto é necessário mudar o nome do const
  
    title: "Cohabit", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2023",
    // link: "genera.com.br", //opcional 
    color: "bg-[#2B3DA1] dark:bg-[#080E4D]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/teste-fundo.png`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/cover-teste.png`, //thumbnail
    description:
      "Cohabit is an application that connects people looking to share housing in a safe and efficient way.",
    scope: "User Interface, User Experience",
    duration: "3 Months", //opcional
    type: "Case Study",
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Shared housing is a common practice worldwide for various reasons: financial situation, moving due to college, a job in a larger city, high rental prices, or simply wanting to save money. However, for most people, finding an ideal roommate can cost time and dedication.",
      },
      /*{{
        columns: [
          {
            title: "Aqui vai o titulo da coluna 1",
            text: "Aqui vai o texto da coluna 1",
            aditional: "Outro texto se quiser",
          },
          {
            title: "Aqui vai o titulo da coluna 2",
            text: "Aqui vai o texto da coluna 2",
          },
          {
            icon: "ArrowDownIcon", //basta escolher o icone no site heroicons, e smp colocar o 'Icon' no final
            title: "Aqui vai o titulo da coluna 3",
            text: "Aqui vai o texto da coluna 3",
          },
        ],
      },*/
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
      
      
      
  
       /* {
        //embed do Canva
        
        canva: "https://www.canva.com/design/DAF8D-SZvL4/yR5bQFmP0Ivdjco0BB7b2g/view?embed",
        caption: "(Click to interact)",
      },
*/
      
  
      /*{
        //embed do vimeo
        vimeo: "https://player.vimeo.com/video/281909451?h=fdbdecd9de",
  
        caption: "legenda do vimeo",
      },*/
      {
        //texto e descrição simples
        title: "The Solution",
        description:
          "The created solution is an application that connects people looking to share housing in a safe and efficient way. The platform allows users to filter by preferences such as gender, age, and hobbies to find compatible roommates. Users have the option to search directly for advertisements or search for people willing to share housing. The solution was developed based on data and information obtained through market research and interviews with potential users. The goal is to provide an effective and safe solution for people looking to share housing.",
      },
      
     {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/idcohabit.jpg`
      },
       {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/appcohabit.jpg`
      },
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/photos/dispcohabit.jpg`
      },
      
      
      // Adicione mais itens de conteúdo conforme necessário
    

      {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/cohabit-img.jpg`
      },
 {
        //embed do figma
        title: "High-fidelity prototype",
        
        figma: "https://embed.figma.com/proto/vuW5FiU3iBlAXJXI67ukK5/Case?page-id=20%3A3&node-id=336-92526&p=f&viewport=1064%2C364%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=336%3A92522&embed-host=share",
        caption: "Click to interact",
      },
      {
        //texto e descrição simples
        title: "Conclusion",
        description:
          "In this case study, I explored design methodologies to solve problems. During the process, I conducted an analysis of the needs of potential users and the market, resulting in an interface that prioritizes usability."
          
      },
      {
        description: "Although the application was not implemented, the main proposed solutions aim to address the pain points identified in the initial research:"
      },

      {
        description:    
         "Increase in user satisfaction: Enhancing the chances of profile compatibility for users; Improvement in the user journey: By consolidating previous actions in one place, with the possibility of customization.",
      },
    ],
  };
  
  
  export default Cohabit;
  
