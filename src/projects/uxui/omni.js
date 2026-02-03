import { Link } from "react-router-dom";

const omni = { //todo projeto é necessário mudar o nome do const
  
    title: "Omni", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2026",
    // link: "genera.com.br", //opcional 
    color: "bg-[#620937] dark:bg-[#3D0727]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/Cover-omni.png`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/Cover-opea.png`, //thumbnail
    description:
      "A unified experience to manage securitization operations.",
    scope: "Product Design",
    type: "Company Project",
    duration: "12 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "What it is",
        description:
          "Omni is an integrated securitization management platform that connects and organizes workflows across different user profiles, providing visibility, control, and transparency from start to finish.",
      },
           
  {
        Duo: [
          //imagem em duas colunas
          {
            
            imgDuo:
              "../img/photos/Onboarding.png",
          },
          {
          
            imgDuo:
            "../img/photos/Bot.png",
          },
        ],
      },
     
     {
      title: "The challenge",
      description: "Before Omni, the platform only supported the debtor portal, where users could view installments and renegotiate debts. Other user profiles (such as borrowers and investors) did not have direct access to information about their operations.To track performance, payments, or events, users had to rely on analysts, navigate multiple systems, spreadsheets, and lengthy documents. The project challenge was to unify this ecosystem and make information accessible to all involved profiles. Proposed value:",
                
    },
    {
      quote: "Transform a complex and fragmented process into a clear, integrated, data-driven experience.",
    },
       {
      title: "My Role",
    

    },
{
columns: [
 {
    icon: "UsersIcon",
    text: "User profile research and understanding of user needs",
  },
  {
    icon: "ChartBarIcon",
    text: "Market research in securitization and investments, including benchmarking of key players",
  },
  {
    icon: "LightBulbIcon",
    text: "Feature definition in collaboration with the Product Manager and stakeholders",
  },
  {
    icon: "Squares2X2Icon",
    text: "Information architecture definition and user flow mapping",
  },
  {
    icon: "CursorArrowRaysIcon",
    text: "High-fidelity design and prototyping for the MVP",
  },
  {
    icon: "ClipboardDocumentCheckIcon",
    text: "Usability testing and user interviews to validate the MVP",
  },
  {
    icon: "ArrowPathIcon",
    text: "Iterations and refinements based on testing insights",
  },
  
],
},



    
     
      
      
     {
        title: "Key Features",
        subtitle: "Dinamic Dashboard",
        description: "Omni allows each user to configure their dashboard according to their needs. Users can choose a ready-made template or create one from scratch, adding only relevant cards. Cards can be edited, resized, duplicated, or removed, ensuring flexibility and continuous adaptation based on real usage.",
    },
 {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/dashboard.png`
    },



      {
        title: "Debtor Portal",
        description: "A portal to track and renegotiate debts across Agribusiness, Corporate, or Real Estate profiles.",
   
      },
       {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/devedor.png`
    },
      

      {
      title: "Investor Portal",
      },
        {
            description:
          "The Investor Portal centralizes issuance and investment portfolio information in a single environment. Investors can create and share portfolios, view consolidated data or portfolio-specific data, and track relevant events such as obligations, assemblies, and ratings.",
        },
           
      
      
 {
        Duo: [
          //imagem em duas colunas
          {
           
            imgDuo:
              "../img/photos/investidor1.png",
          },
          {
         
            imgDuo:
            "../img/photos/investidor2.png",
          },
        ],
      },


      {
      title: "Help Portal",
      },
  
        {
            description:
          "A dedicated space for platform questions, with support content and a chatbot always available to assist users.",
        },
           {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/ajuda.png`
    },
      
      
      

    {
      title: "Style Guide",
      description: "To ensure consistency between design and development, a style guide was created with the platform’s components, including states, variations, and interactions.",
    },
            
    
    {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/DS.png`
    },
 {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/icons.png`
    },

      {
        title: "Results and user feedback",
        description:"For the first version, usability tests were conducted with 17 participants. Most issues identified related to interaction elements such as clickable area size, missing links in navigation buttons, inconsistent hover states, and unclear portfolio flows. Performance issues such as loading delays and document download problems were also identified.",

      },
{
  inlineColumns: [
    {
        title: "Insights",
        description: "Testing highlighted the need to standardize interaction patterns and reduce ambiguity in user flows, especially in portfolio management. The focus shifted to simplifying critical paths, reinforcing visual feedback, and making actions more predictable.",
          
    },
    {
      img: `${process.env.PUBLIC_URL}/img/photos/teste.png`,
    }
  ],
},
      


{
  title: "Conclusion",
          description:
            "Omni centralized operation tracking into a single environment and is now used recurrently by users. 76% of sessions are from returning users, indicating strong integration into daily workflows. 24% are new users, showing gradual adoption by new profiles.",
            
        },
        
        {
      
     
      columns: [
        {
          icon: "UsersIcon", 
          bigNumber: "76%",
          text: "Returning users",
          //aditional: "Outro texto se quiser",
        },
        {
          icon: "UserPlusIcon", 
          bigNumber: "24%",
          text: "New users",
        },
        
      
      ],
      
      
   
    },
   
        {
      title: "Main Results",
      columns: [
        {
          text: "✅ Reduced dependence on analysts and spreadsheets",
        },
        {
          text: "✅ Fewer systems required to manage operations",
        },
        {
          text: "✅ Direct access to information by user profile",
        },
        {
          text: "✅ Clearer, more centralized experience",
        },
        {
          text: "✅ Clean and dynamic interface supporting daily workflows",
        },
        
      ],
    },
        
   {
      imgBig: `${process.env.PUBLIC_URL}/img/photos/Omni.png`
    },

{
  title: "Thank you for following my work!",
  description: (
    <>
      If you enjoyed it and would like to see more, send me a message through the{" "}
      <Link
        to="/contact"
        className="underline hover:no-underline inline-flex"
      >
        contact page
      </Link>
      {" "}or send an email to:{" "}
      <a
        href="mailto:juliacristinap.santos@gmail.com"
        className="underline hover:no-underline"
      >
        juliacristinap.santos@gmail.com
      </a>
    </>
  )
}

    ],
  };
  
  
  export default omni;
  
