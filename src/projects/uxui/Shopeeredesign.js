const Shopeeredesign = { //todo projeto é necessário mudar o nome do const
  
    title: "Shopee Redesign", //o título tem que ser exatamente igual ao nome do arquivo, se não dá ruim
    year: "2025",
    // link: "genera.com.br", //opcional 
    color: "bg-[#D85322] dark:bg-[#B24820]", //cores do projeto, só escolher no tailwind
    image: `${process.env.PUBLIC_URL}/img/photos/Cover-Shopee.jpg`, //imagem de fundo do hero
    thumb: `${process.env.PUBLIC_URL}/img/photos/thumb-shopee.png`, //thumbnail
    description:
      "Less noise, more conversion.",
    scope: "User Interface, User Experience",
    type: "Case Study",
    duration: "3 Months", //opcional
  
    contents: [
      {
        //texto e descrição simples
        title: "Context & Problem",
        description:
          "Shopee is an e-commerce giant, known for its competitive prices and infinite variety. But this abundance comes at a high price: cognitive overload. The current interface bombards the user with information, tags, banners, making it difficult to focus on what really matters: completing the purchase. The challenge of this academic project was clear:",
      },
      
      {
        //texto e descrição simples
        quote:
          "How to reduce visual pollution and optimize the checkout journey without losing the platform's promotional essence?",
      },

       {
      title: "Starting Point",
      description: "Before diving into the research, we mapped out some critical assumptions about the friction points in the interface:",
     },
     {
          
        columns: [
    {
      icon: "PuzzlePieceIcon",
      title: "Pollution and Overload",
      text: "Interface with too much information lacking cohesion and harmony, causing distractions.",
    },

    {
       icon: "MapIcon",
      title: "Confusing Navigation",
      text: "Difficulty finding categories and confusions like the 'see more' and 'more categories' buttons.",
    },
    {
         icon: "ShoppingCartIcon",
      title: "The Cart Cemetery",
      text: "Products are abandoned for a long time. The process of clearing the cart doesn't work properly, and selecting variations (colors/sizes) is confusing.",
    },
     {
         icon: "ClockIcon",
      title: "Endless Checkout",
      text: "A lengthy stage that leaves vital parts to be confirmed aside, generating insecurity.",
    },
  ],
},


        {
        title: "Hypothesis Validation",
        description: "To validate (or debunk) these hypotheses, we ran a quantitative survey with 80 users. The data revealed that the problem was even deeper:",
        columns: [
          {
            bigNumber: "92.5%",
            text: "use the platform for purchases, and the vast majority (89.2%) use the search bar directly; the categories section is not used.",
          },
          {
            bigNumber: "89.2%",
            text: "have abandoned a shopping cart on Shopee.",
          },
          {
            bigNumber: "15.2%",
            text: "users said the main reason was difficulties in the process and confusion with the excess of information, while the others said the reason was the price being too high.",
          },
        ],
        
      },
      {
        description: "A Heuristic Analysis confirmed the pain points: the current checkout violates Hick's Law, as the excess of options drastically increases the user's decision time.",
      },
    
     
     {
      title: "Anna's Journey (Personifying the Problem)",
      description: "To materialize the data, we mapped out the journey of Anna, a user focused on competitive prices. When trying to complete an order with items from different stores, she runs into real frustrations:",
     },
         {
      //imagem tamanho padrão
      img: `${process.env.PUBLIC_URL}/img/photos/anna.jpg`
    },
     
    


     {
  columns: [
    {
      icon: "ShoppingCartIcon",
      title:"In the Cart",
      text: "Absurd difficulty in removing unwanted products and confusion when differentiating items from two distinct stores.",
    },
    {
      icon: "CreditCardIcon",
      title:"At Payment",
      text: "The overloaded screen hides the most important information, generating doubt about which payment method is actually being used.",
    },
    
  ],
},

{
  title: "The Solution (The Redesign)",
  description: "Based on the prioritization matrix (Desirability, Feasibility, and Viability Matrix), we focused on opportunities of high value for the user and the business with high technical ease of implementation. The new interface tackles the frictions head-on:",
},
      
   

      {
      title: "Clean and Functional Cart",
      },
        {
            description:
          "We reorganized the footer into a transparent vertical hierarchy, making it clear which address is active for that order and separating the item quantity ('Products (2)') to better break down the costs. In the coupons section, we added a quick indicator ('2 available') to reduce unnecessary clicks. Furthermore, we removed the product selection checkboxes to combat the 'cart cemetery', preventing users from leaving unchecked items accumulating and unnecessarily cluttering the interface. This decision also acts as a vital error prevention measure, ensuring the user doesn't accidentally pay for an item they forgot to uncheck. The purpose is for the cart to become a place dedicated solely to conversion, rather than an unfulfilled wishlist.",
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
          "We transformed the endless, single-page checkout into a guided, step-by-step flow. By isolating the 'Address' and 'Shipping' selections into dedicated screens, the user processes one piece of information at a time, reducing cognitive load and anxiety. In the shipping step, I added a clear visual separation between 'National' and 'International' deliveries, making it easier to understand the different fees and delivery timeframes. This step-by-step approach, featuring targeted action buttons ('Continue to shipping'), eliminates distractions, prevents errors (such as selecting the wrong address or card), and safely guides the user to the final conversion.",
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
          "To complete the guided step-by-step flow, we designed dedicated screens for Payment and Order Review. Previously, all billing, shipping, and product information was crammed into a single endless page, causing confusion and insecurity. Now, selecting a payment method is a clean, visually distinct process. I introduced a final 'Order Review' step, allowing users to confidently double-check all details (items, address, and a transparent cost breakdown) before the final charge, acting as a crucial error-prevention measure. Finally, the new success screen features a clear order status timeline, drastically reducing post-purchase anxiety.",
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
        description: "To ensure our redesign truly solved the cognitive overload, we validated the new architecture through a Tree Test and moderated Usability Testing sessions.",


      },
      {
      columns: [
        {
          icon:"PresentationChartBarIcon",
          title: "High Success Rates",
          text: "The Tree Test quantitative results showed an overwhelming direct success rate across all primary tasks. Users navigated the new cart hierarchy and checkout steps intuitively, without getting lost or second-guessing their clicks.",
        },
         {
          icon:"CheckBadgeIcon",

          title: "Zero Friction",
          text: "Qualitative feedback confirmed that breaking the 'endless checkout' into a guided stepper drastically reduced anxiety.",
        },
      ],
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
          title: "Lower Cognitive Load",
          text: "✅ Removing the 'cart cemetery' and endless scrolling resulted in faster, smoother purchase decisions.",
        },
        {
          title: "Error Prevention",

          text: "✅ The step-by-step checkout allowed users to confidently review details, preventing wrong addresses or payment methods.",
        },
        {
          title: "Transparent Shipping",

          text: "✅ Separating National vs. International delivery wiped out hidden surprises and managed expectations.",
        },
        {
          title: "Reduced Anxiety",

          text: "✅ The new post-purchase timeline gives immediate clarity, potentially reducing support tickets.",
        },
       
        
      ],
    },

{
  title: "Conclusion",
          description:
            "By replacing Shopees cluttered, single-page checkout with a clean, step-by-step guided flow, we transformed a stressful experience into a fluid user journey. This redesign proves that adapting a globally complex product to prioritize clarity and error prevention directly boosts user trust and conversion rates.",
            
        },
        {
        description:
            "This was the final project for the Advanced UX/UI Design course at CoderHouse, a comprehensive 50-hour program over 13 weeks. CoderHouse is an online school committed to providing high-quality, accessible education across Latin America.",
        }

    ],
  };
  
  
  export default Shopeeredesign;
  
