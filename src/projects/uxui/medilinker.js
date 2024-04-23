const Medilinker = { //todo projeto é necessário mudar o nome do const
  
  title: "MediLinker", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
  year: "2023",
  // link: "genera.com.br", //opcional
  color: "bg-[#0098AC] dark:bg-[#1B6D78]", //cores do projeto, só escolher no tailwind
  image: `${process.env.PUBLIC_URL}/img/photos/medilinker-hero.png`, //imagem de fundo do hero
  thumb: `${process.env.PUBLIC_URL}/img/photos/cover-medilinker.jpg`, //thumbnail
  description:
    "MediLinker is a service designed to assist individuals affected by medicine scarcity and difficulty in access. ",
  scope: "User Interface, User Experience",
  duration: "3 Months", //opcional

  contents: [
    {
      //texto e descrição simples
      title: "Project summary",
    },
    {
      columns: [
        {
          icon: "ChatBubbleOvalLeftIcon", 
          title: "The Product",
          text: "MediLinker is a service designed to assist individuals affected by medicine scarcity and difficulty in access. Users can describe their symptoms and be directed to the appropriate specialty and available doctors to help them at prices lower than usual. Additionally, they can securely store their health records, receive appointment reminders, and access a forum with doctors for free questions.",
          //aditional: "Outro texto se quiser",
        },
        {
          icon: "QuestionMarkCircleIcon", 
          title: "The Problem",
          text: "The low-income population in Brazil is the most affected by the lack of access to basic healthcare services. This includes costs associated with medical consultations and medications, as well as indirect costs such as transportation to medical appointments. The lack of access to medical services can contribute to delayed diagnoses and inadequate treatments.",
        },
        {
          icon: "FlagIcon", //basta escolher o icone no site heroicons, e smp colocar o 'Icon' no final
          title: "Goals",
          text: "The goal is to provide a solution that allows people in low-income communities to access healthcare services, obtain specialized medical guidance, and reduce the financial and logistical barriers that often hinder access to essential medical care.",
        },
      ],
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
            "../img/photos/medilinker-img1.jpg",
        },
        {
          imgDuo:
            "../img/photos/medilinker-img2.jpg",
        },
      ],
    },

    /*{
      //embed do figma
      title: "Figma",
      description: "descrição do projeto no figma",
      figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F19JvWq1o5248YNm5m2Gy4f%2FDesign-System---Genera%3Ftype%3Ddesign%26node-id%3D118-3516%26t%3D0foJRkUZbG7MQN2m-1",
      caption: "legenda do figma",
    },*/

    {
      //embed do Canva
      canva: "https://www.canva.com/design/DAF80TOOVQI/o69MGB5jIlJDi2Ob5Kwiug/view?embed",
    },

  
    {
      //texto e descrição simples
      title: "Wireframes",
    },
    {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/Wireframesmedi.jpg`
    },
    {
      //texto e descrição simples
      title: "Final Screens",
    },
    
    {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/id-medilinker.jpg`
    },
    {
      img: `${process.env.PUBLIC_URL}/img/photos/medi-responsive.jpg`
    },
   
    {
      //imagem expandida
      imgBig: `${process.env.PUBLIC_URL}/img/photos/expandedmedi.jpg`
    },

    // Adicione mais itens de conteúdo conforme necessário
    {
      //texto e descrição simples
      title: "Impact",
      description: "Users have shared that the app could really help reduce the lack of access to healthcare for those who don't have many resources. Making transportation and costs easier.",
    },
    {
      //texto e descrição simples
      title: "What I've learned",
      description: "I've learned that, despite the complexity of the problem I was trying to solve, by dedicating myself meticulously to each phase of the design process and ensuring that my actions were in line with the particular needs of the users, I was able to develop practical and beneficial solutions.",
    },
    {
      //texto e descrição simples
      title: "Next steps",
    },
    {
      columns: [
        {
          text: "Conduct a survey to find out if the app is helping the lower-income population access healthcare services.",
          //aditional: "Outro texto se quiser",
        },
        {
          text: "Add more educational content to the articles in the app.",
        },
        {
          text: "Seek additional partnerships to make the costs of the app's services more affordable.",
        },
      ],
    },
    {
      //texto e descrição simples
      title: "Thank you for following my work!",
      description: "Thank you for taking the time to follow my work on the MediLinker app! If you enjoyed it and would like to see more of my work, my links are provided below: Email: juliacristinap.santos@gmail.com"
    },
  ],
};


export default Medilinker;
