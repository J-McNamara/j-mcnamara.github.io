// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-mutant-idh-activated-cytotoxic-prodrugs-for-glioma-therapy",
      
        title: "Mutant IDH-Activated Cytotoxic Prodrugs for Glioma Therapy",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/glioma";
        
      },
    },{id: "post-science-quotes",
      
        title: "Science Quotes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/science-quotes";
        
      },
    },{id: "post-friend-quotes-on-science-and-business",
      
        title: "Friend Quotes on Science and Business",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/friend-quotes";
        
      },
    },{id: "post-questions",
      
        title: "Questions",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/questions";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%63%6E%61%6D%61%72%61.%77%65%62%73%69%74%65.%63%6F%6E%74%61%63%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/j-mcnamara", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/j-mcnamara", "_blank");
        },
      },{
        id: 'social-quora',
        title: 'Quora',
        section: 'Socials',
        handler: () => {
          window.open("https://www.quora.com/profile/josh-mcnamara", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=H3aE860AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/joshtmcnamara", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
