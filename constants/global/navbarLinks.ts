interface NavbarLinks {
    key: String
    path: String;
    isExternal: Boolean
  }
  export const NAVBAR_LINKS : NavbarLinks[] = [
    {
      key: "contact",
      path: "mailto:paul.haddou@gmail.com",
      isExternal: true
    },
    {
      key: "resume",
      path: "assets/pdfs/resume/Paul-Haddou_Resume.pdf",
      isExternal: true
    },
    {
      key: "linkedin",
      path: "https://www.linkedin.com/in/paul-haddou/",
      isExternal: true
    },
  ]
