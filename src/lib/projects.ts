import { v4 as uuid } from "uuid"
export const projects = [
  {
    id: uuid(),
    name: "Network Intrusion Detection System using ML",
    description:
      "Developed an advanced security system integrating SNORT for real-time intrusion detection and prevention,coupled with Nginx for efficient web traffic management",
    image: "/projects/P1.png",
    labels: ["SNORT", "Machine Learning", "Linux"],
    date: "Ongoing",
    sourceCode:null,
    liveUrl: null,
  },
 
  {
    id: uuid(),
    name: "Cargo Connect",
    description:
      "Cargo Connect is a digital platform designed to link shippers and carriers across India, aiming to enhance logistics operations.",
      image: "/projects/P3.png",
    labels: ["React.js", " Express.js", "MongoDB", "TailwindCSS"],
    date: "January 2024",
    sourceCode: "https://github.com/ranjithkumar404/Cargo-Connect",
    liveUrl: null,
  },

 
 
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
// Sort in descending order based on the recent project
