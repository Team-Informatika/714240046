import{getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";
renderHTML("Card", "render.html")
getJSON("https://t.if.co.id/json/zahra.json","null","null", rensponseFunction);
function rensponseFunction(response){
    console.log('HTTP Status:', response.status);
    console.log('response.data:', response.data);
    setInner('nama', response.data.profileCard.container.user.info.name);
}





function openInfo() {
    document.getElementById('user-box').classList.remove('hide-details');
}

function closeInfo() {
    document.getElementById('user-box').classList.add('hide-details');
}
