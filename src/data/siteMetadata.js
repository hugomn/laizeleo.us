const languages = require("./languages");

module.exports = {
  siteUrl: "https://www.laizeleo.us",
  description:
    "Queridos amigos! Esperamos vocês no nosso dia especial: 02 de Maio de 2025! Reserve essa data e venha comemorar conosco! 🧡",
  // description: {
  //   pt:
  //     "Queridos amigos! Esperamos vocês no nosso dia especial: 15 de Abril de 2022 de 2022! Reserve essa data e venha comemorar conosco! 🧡",
  //   en:
  //     "Dear friends! We look forward to having you with us in our great day! April 15th, 2022! 🧡",
  // },
  author: {
    name: "Hugo Nogueira",
    bio: "CPTO @ Complyance. Berlin, Germany",
    homeCity: "Berlin",
    email: "hugomn@gmail.com",
    twitter: "hugomn",
    defaultLink: "https://github.com/hugomn",
  },
  sourceCodeLink: "https://github.com/hugomn/laizeleo.us",
  disqusShortname: "hugomagalhes",
  menu: [
    { label: "menu.us", slug: "/#os-noivos" },
    { label: "menu.story", slug: "/#historia" },
    { label: "menu.schedule", slug: "/#programacao" },
    // { label: "menu.groomsmen", slug: "/#padrinhos" },
    // { label: "menu.bridesmaids", slug: "/#madrinhas" },
    { label: "menu.where", slug: "/#onde" },
    { label: "menu.dresscode", slug: "/#dress-code" },
    // { label: "menu.rsvp", slug: "/#rsvp" },
    { label: "menu.gifts", slug: "/#presentes" },
    { label: "menu.tips", slug: "/#orientacoes" },
  ],
  languages,
  contact: [
    {
      type: "email",
      value: "hugomn@gmail.com",
      link: "mailto:hugomn@gmail.com",
    },
  ],
  wedding: {
    date: "2025-05-02",
    fundingGoal: 20000,
    fundingPledged: 0,
  },
};
