import{getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

fetch("https://t.if.co.id/json/zahra.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching JSON:", error));





function openInfo() {
    document.getElementById('user-box').classList.remove('hide-details');
}

function closeInfo() {
    document.getElementById('user-box').classList.add('hide-details');
}
