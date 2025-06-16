const siteinstitucional = { //todo projeto é necessário mudar o nome do const
  
    title: "Site Institucional - Smarthis", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2024",
    link: "smarthis.com", //opcional 
    color: "bg-[#212B36] dark:bg-[#292929]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/CoverSmarthis.jpg`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/cover-smarthis2.png`, //thumbnail
    description:
      "A fresh look for an automation company's website: more modern and strategic.",
    scope: "User Interface, User Experience",
    duration: "6 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Smarthis is a Brazilian company focused on digital transformation, specializing in process automation to enhance the efficiency of its clients. The main goal of this project was to modernize the institutional website, clearly communicating the following values: technology, trust, and maturity. The previous version of the website featured overly saturated colors, which led to visual fatigue and low user engagement. Additionally, it included visual elements that conveyed a younger and more informal image than what the C-level executives currently wanted—such as outdated illustrations and vague content regarding the company's solutions.",
      },
      {
        //texto e descrição simples
        title: "The Approach",
        description:
          "After identifying the key issues and aligning expectations with the company, I began a benchmarking study to analyze best practices adopted by both direct and indirect competitors. From there, I developed a visual moodboard and proposed a medium-fidelity wireframe to present the structure and visual direction of the new website.",
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
        img: `${process.env.PUBLIC_URL}/img/photos/idsmarthis.jpg`
      },
      {
        //texto e descrição simples
        title: "The Solution",
        description:
          "The visual identity was refined through the use of a new secondary color—more neutral and elegant—applied to larger areas of the layout. The brand’s original green was retained in a more restrained way, used only in strategic elements to ensure consistency with the logo without compromising the desired sense of sophistication. We also carried out a complete review of the site’s information architecture and content, aiming to make navigation more intuitive and to improve the understanding of the services offered. Throughout the entire process, I maintained a collaborative approach with stakeholders, holding regular meetings for validation and ensuring that each stage aligned with the company’s expectations.",
      },
      {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/dispsmarthis.jpg`
      },
      {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/smarthisimg1.jpg`
      },
      {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/smarthisimg2.jpg`
      },
      {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/smarthisimg3.jpg`
      },
      {
        //imagem expandida
        img: `${process.env.PUBLIC_URL}/img/photos/smarthisimg4.jpg`
      },
      
      {
        //texto e descrição simples
        title: "Conclusion",
        description:
          "The redesign of Smarthis' website was not just a visual update, but a strategic transformation of how the company wants to present itself today. The new site reinforces the company’s credibility, enhances the user experience, and clearly communicates its position as a reference in automation and digital transformation solutions.",
      },
      // Adicione mais itens de conteúdo conforme necessário
    
    ],
  };
  
  
  export default siteinstitucional;
  