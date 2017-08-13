/**
 * Created by Leo N. on 2017-08-03.
 */

var BASEURL = 'https://ekletik.com';
var content = document.getElementById('gallery');


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ekletik.com/api/portfolio');

// Onload...
xhr.onload = function () {
    var data = JSON.parse(xhr.responseText);
    renderHTML(data);
}; xhr.send();

function renderHTML(data) {
    var contentTitle = "";
    var contentImg   = "";
    var contentDesc  = "";
    var contentFull  = "";

    for(var i=0; i < data.length; i++) {
     if(data[i].autor === "Leo Neto"){
        contentTitle += data[i].nome;
        contentFull += '<div class="card">';
        contentFull += '<img src="' + BASEURL + data[i].capa + '" class="" id="' + i + '">';
        contentFull += '</div>';
     }
    }
    content.insertAdjacentHTML('beforeend', contentFull);
}
