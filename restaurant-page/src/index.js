import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import "./style.css";

function addNavEvents() {
  document.getElementById("homeBtn").addEventListener("click", loadHome);
  document.getElementById("menuBtn").addEventListener("click", loadMenu);
  document.getElementById("contactBtn").addEventListener("click", loadContact);
}

loadHome();
addNavEvents();
