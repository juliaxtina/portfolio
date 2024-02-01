const teste = { //todo projeto é necessário mudar o nome do const
  
    title: "teste", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2022",
    link: "genera.com.br", //opcional
    color: "bg-white dark:bg-slate-900", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/genera/teste-fundo.png`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/genera/Cover-teste.png`, //thumbnail
    description:
      "Genera is a pioneering Brazilian genetics laboratory in the genomic medicine segment, offering a personalized platform for ancestry, health and well-being testing.",
    scope: "User Interface, User Experience",
    duration: "7 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "New Design System",
        description:
          "Blending modern genetic concepts with user-friendly interfaces, this project ensures a cohesive visual identity and effortless user experience. The main goal of this design system is to simplify the communication of complex genealogical information, making interactive engagement smoother while elevating the company's brand presence in the genetics field.",
      },
  
      {
        //texto com link
        credits: [
          {
            text: "Portfolio da julia",
          },
          {
            link: '<a href="http://behance.net/julinha">clique aqui</a>', //não esqueça de colocar http://
          },
        ],
      },
  
      {
        Duo: [
          //imagem em duas colunas
          {
            imgDuo:
              "https://ecommerce.cdn.genera.com.br/uploads/2023/11/01-homeANCESTRALIDADE-600x400px_out23.png.webp",
          },
          {
            imgDuo:
              "https://ecommerce.cdn.genera.com.br/uploads/2023/11/03-homeSAUDE-600x400px_out23.png.webp",
          },
        ],
      },
  
      {
        //embed do figma
        title: "Figma",
        description: "descrição do projeto no figma",
        figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19JvWq1o5248YNm5m2Gy4f%2FDesign-System---Genera%3Ftype%3Ddesign%26node-id%3D118-3516%26t%3D0foJRkUZbG7MQN2m-1",
        caption: "legenda do figma",
      },
  
      {
        //embed do Canva
        title: "Canva",
        description: "descrição do projeto no canva",
        canva: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19JvWq1o5248YNm5m2Gy4f%2FDesign-System---Genera%3Ftype%3Ddesign%26node-id%3D118-3516%26t%3D0foJRkUZbG7MQN2m-1",
        caption: "legenda do canva",
      },
  
      {
        //embed do vimeo
        vimeo: "https://player.vimeo.com/video/281909451?h=fdbdecd9de",
  
        caption: "legenda do vimeo",
      },
  
      {
        //imagem tamanho padrão
        img: `${process.env.PUBLIC_URL}/img/genera/amostra.png`
      },
  
      {
        //imagem expandida
        imgBig: `${process.env.PUBLIC_URL}/img/genera/amostra.png`
      },
  
      // Adicione mais itens de conteúdo conforme necessário
    
    ],
  };
  
  
  export default teste;
  