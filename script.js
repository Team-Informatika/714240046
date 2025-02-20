import{getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";
getJSON("https://t.if.co.id/json/zahra.json",null,null, responseFunction);
function responseFunction(response) {
    console.log('HTTP Status:', response.status);
    console.log('Response Data:', response.data);
    const username = response.data.card.infos.username
    console.log(username);
    setInner('nama', username);
}

renderHTML('render', 'render.html')