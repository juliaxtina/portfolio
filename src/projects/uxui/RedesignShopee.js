const RedesignShopee = { //todo projeto é necessário mudar o nome do const
  
    title: "Redesign Shopee", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2024",
    // link: "genera.com.br", //opcional 
    color: "bg-[#D55425] dark:bg-[#D55425]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/Cover-Shopee.jpg`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/thumb-shopee.png`, //thumbnail
    description:
      "Simplifying Shopee’s checkout with a clear multi-step flow and an improved interface to make buying easier and more enjoyable.",
    scope: "User Interface, User Experience",
    type: "Case Study",
    duration: "3 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "The Challenge",
        description:
          "Although Shopee is widely used in Brazil, the app still follows purchasing patterns common in Asian markets. This creates friction for local users — especially during the long and often confusing checkout process.",
      },
      {
        //texto e descrição simples
        title: "Hypothesis",
        description:
          "Users feel overwhelmed during checkout, increasing the chances of cart abandonment before completing their purchase.",
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
      title: "Understanding the problem",
      columns: [
        {
          icon: "ChatBubbleOvalLeftIcon", 
          bigNumber: "81%",
          text: "said the app’s navigation is confusing",
          //aditional: "Outro texto se quiser",
        },
        {
          icon: "QuestionMarkCircleIcon", 
          bigNumber: "31.1%",
          text: "believe the purchase flow needs improvement",
        },
      
      ],
      
      
    },
    {
      quote: "How can we make the cart and payment flow smoother and more intuitive, without skipping important steps?",
    },
      
     {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/Shopeeid.png`
    },
      
      
     {
        title: "What we aimed to solve",
         inlineColumns: [
          {
            bigNumber: "1",
            title: "Reduce cart abandonment",
            text: "Streamline the experience and reduce friction."
          },
          {
            bigNumber: "2",
            title: "Build user confidence and loyalty",
            text: "Create a trustworthy checkout that encourages return."
          },
          {
            bigNumber: "3",
            title: "Adapt the checkout flow to local expectations",
            text: "Customize the flow for Brazilian users."
          },
        ]
},



      {
        title: "Key opportunities",
      },
      {
      columns: [
      {
        //texto e descrição simples
        title: "Simplify",
        icon: "Square2StackIcon",
        text:
          "Break the process into smaller, guided steps"
          
      },
      {
        title: "Organize",
        icon: "Cog6ToothIcon",
        text:
          "Clarify and organize critical information"
          
      },
      {
        title: "Double Check",
        icon: "CheckCircleIcon",
        text:
          "Allow full review before finalizing"
          
      },
      {
        title: "Familiarity",
        icon: "HandThumbUpIcon",
        text:
          "Use a layout more familiar to Brazilian users"
          
      },
    ],
  },
      {
      title: "Shopping Cart",
      },
        {
            description:
          "For the shopping cart, we focused on a clear font hierarchy with ample spacing, visible shipping calculations and progress indicators, clear distinction between national and international orders to avoid misinterpretations, and highlighted coupons alongside a detailed subtotal.",
        },
        
      
      
      
 {
        Duo: [
          //imagem em duas colunas
          {
            title: "Before",
            imgDuo:
              "../img/photos/shopee3.png",
          },
          {
            title: "After",
            imgDuo:
            "../img/photos/shopee2.png",
          },
        ],
      },


      {
      title: "Shipping & Address",
      },
  
        {
            description:
          "Our step-by-step navigation clearly shows users which step they are on, reducing cognitive load and simplifying the checkout process with easier address selection and editing, along with clear shipping options for a smoother experience.",
        },
        
      
      
      
      {
        Duo: [
          //imagem em duas colunas
          {
            title: "Before",
            imgDuo:
              "../img/photos/shopee5.png",
          },
          {
            title: "After",
            imgDuo:
            "../img/photos/shopee4.png",
          },
        ],
      },

    {
      title: "Payment & Confirmation",
    },
        {
            description:
          "The frictionless payment method selection, combined with a clear order summary before checkout and the ability to edit any step, ensures a controled experience, while the post-purchase timeline keeps users informed.",
        },
        
      
      
    
    {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/shopee1.png`
    },

 {
        //embed do figma
        title: "High-fidelity prototype",
        
        figma: "https://embed.figma.com/proto/DiA64DT9NhASBGKOlG15oW/Coderhouse---Grupo-1?page-id=796%3A1843&node-id=845-8658&p=f&viewport=744%2C433%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=845%3A8658&embed-host=share",
        caption: "Click to interact",
      },

      {
        title: "Results and user feedback",

      },
{
  inlineColumns: [
    {
        quote: "The design feels simple and easy to use. I didn’t face any issues completing my order. I like the cleaner look, fewer distractions and clearer information.",
          
    },
    {
      img: `${process.env.PUBLIC_URL}/img/photos/usertest.png`,
    }
  ],
},
      
{
      title: "Main takeaways",
      columns: [
        {
          text: "✅ Lower cognitive load = faster, smoother purchases",
        },
        {
          text: "✅ Users could easily review all their details",
        },
        {
          text: "✅ More intuitive and distraction-free experience",
        },
        {
          text: "✅ Clearer delivery expectations",
        },
        {
          text: "✅ Post-purchase timeline reduced support tickets",
        },
        
      ],
    },

{
  title: "Conclusion",
          description:
            "By adjusting the structure and visuals of Shopee’s checkout flow, we made the experience more fluid, user-friendly, and culturally aligned with Brazilian users. This redesign shows how adapting a global product to users needs can improve clarity, trust, and user satisfaction.",
            
        },
        {
        description:
            "This was the final project for the Advanced UX/UI Design course at CoderHouse, a 50-hour program over 13 weeks. CoderHouse is an online school committed to providing high-quality, accessible education across Latin America."
            ,
        }

    ],
  };
  
  
  export default RedesignShopee;
  
