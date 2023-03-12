import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    angular,
    sql,
    tailwind,
    nodejs,
    csharp,
    git,
    vstudio,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    xamarin,
    xaml,
    wpf,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: ".Net Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "vstudio",
      icon: vstudio,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "xamarin",
      icon: xamarin,
    },
    {
      name: "xaml",
      icon: xaml,
    },
    {
      name: "wpf",
      icon: wpf,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Intechzia",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2019 - May 2020",
      points: [
        "Wrote custom HTML 5, PHP, CSS 3, and JavaScript for existing websites and applications.",
        "Designed, recommended and pitched improvements to new and existing features.",
        "Updated and edited website content, posts and pages.",
        "Provided technical support related to web-based systems to internal teams.",
        "Created prototypes and experimented with new technologies and features as assigned"


      ],
    },
    {
      title: "Software Engineer Trainee",
      company_name: "Techbit Solutions Pvt Ltd.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Mar 2022",
      points: [
        "Gathered knowledge from SME's and Team leaders on already developed applications.",
        "Gathered requirements for enhancements, provided analysis, and implemented the same.",
        "Wrote new program code using prescribed specifications.",
        "Worked on N-tier web applications in .NET framework using C#, ASP.NET MVC, Core, Angular, and JavaScript.",
        "Using JavaScript and HTML controls for Client-Side validations.",
        "Using technologies like Angular, Kendo UI, React for Front-End Development."
      ],
      
    },
    {
      title: "Junior Associate- Software",
      company_name: "Hoerbiger",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2022 - Present",
      points: [
        "Enhancing WPF application.",
        "Adding new features as per client request. ",
        "Modifying database and writing SQL queries for the new changes required."
        ],
    },

    
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Comin soon",
      name: "",
      designation: "",
      company: "",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };