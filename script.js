import{getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.1/element.js";

renderHTML('render', 'render.html', renderDariKartu);
function renderDariKartu() {
    getJSON("https://t.if.co.id/json/zahra.json", null, null, responseFunction);
};

function responseFunction(response) {
    console.log('HTTP Status:', response.status);
    console.log('Response Data:', response.data);
    const username = response.data.card.infos.username
    setInner('nama', username);
    setInner('label', response.data.card.infos.label);
    setInner('deskripsi', response.data.card.infos.description);
    setInner('harga', response.data.card.infos.rate);
    const url = response.data.card.infos.contact.url
    const text = response.data.card.infos.contact.text
    setInner('contact' `<a href="${url} target="_blank" class="website"">${text}</a>`);
}

