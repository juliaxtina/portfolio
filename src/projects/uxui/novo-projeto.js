const NovoProjeto = { //todo projeto é necessário mudar o nome do const
  
    title: "Novo projeto", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2023",
    // link: "genera.com.br", //opcional 
    color: "bg-sky-500 dark:bg-sky-300", //cores do projeto, só escolher no tailwind
   // image: `${process.env.PUBLIC_URL}/img/genera/teste-fundo.png`, //imagem de fundo do hero
    // thumb: `${process.env.PUBLIC_URL}/img/genera/Cover-teste.png`, //thumbnail
    description:
      "Novo projeto is an application that connects people looking to share housing in a safe and efficient way.",
    scope: "User Interface, User Experience",
    duration: "3 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Shared housing is a common practice worldwide for various reasons: financial situation, moving due to college, a job in a larger city, high rental prices, or simply wanting to save money. However, for most people, finding an ideal roommate can cost time and dedication.",
      },
  
      {
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
      },
      
    
    ],
  };
  
  
  export default NovoProjeto;
  
