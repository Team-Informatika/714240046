import{getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";
getJSON("https://t.if.co.id/json/zahra.json","null","null", rensponseFunction);
function rensponseFunction(response){
    console.log('HTTP Status:', response.status);
    console.log('response.data:', response.data);
    setInner('nama', response.data.profileCard.container.user.info.name);
    setInner('description', response.data.profileCard.container.user.info.name.description);
    setInner('location', response.data.profileCard.container.user.info.name.description.location);
}

let userBox = document.getElementById("userBox");

function openinfo() {
    userBox.classList.remove("hide-details");
    renderHTML("Card", "render.html");
}
function closeinfo() {
    userBox.classList.add("hide-details");
}