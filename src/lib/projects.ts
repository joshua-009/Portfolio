import { v4 as uuid } from "uuid"

export const projects = [
  {
    id: uuid(),
    name: "Chromatico",
    tagline: "A Color Generator",
    sourceCode: "https://github.com/Deveesh-Shetty/Chromatico",
    liveUrl: "https://chromatico.vercel.app/",
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: "Chromatico",
  },
  {
    id: uuid(),
    name: "Expense Tracker",
    tagline: "Track Your Expenses",
    sourceCode: "https://github.com/Deveesh-Shetty/Expense-Tracker",
    liveUrl: null,
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: "ExpenseTracker",
  },
  {
    id: uuid(),
    name: "Razer Clone",
    tagline: "Clone of Razer Website",
    sourceCode: "https://github.com/Deveesh-Shetty/Razer-Clone",
    liveUrl: "https://razer-clone-iota.vercel.app/",
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: "RazerClone",
  },
  {
    id: uuid(),
    name: "Rolex Clone",
    tagline: "Clone of Rolex Website",
    sourceCode: "https://github.com/Deveesh-Shetty/Rolex-Clone",
    liveUrl: "https://rolex-clone.vercel.app/",
    blogUrl: null,
    descriptionOne: "",
    descriptionTwo: "",
    img: "RolexClone",
  },
  {
    id: uuid(),
    name: "Clouds",
    tagline: "Clouds - A CSE Organization",
    sourceCode: "https://github.com/Deveesh-Shetty/Clouds",
    liveUrl: "https://cs-clouds.netlify.app/",
    blogUrl: "",
    descriptionOne: "",
    descriptionTwo: "",
    img: "Clouds",
  },
]

export const projectsLength = projects.length
