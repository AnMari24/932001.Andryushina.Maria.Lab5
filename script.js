block1.onmouseover = function (){
    block1.style.background = "#ff5555";
};
block1.onmouseleave = function (){
    block1.style.background = "#b6f5f5";
};
block2.onmouseover = function (){
    block2.style.background = "#ff5555";
};
block2.onmouseleave = function (){
    block2.style.background = "#b6f5f5";
};
block3.onmouseover = function (){
    block3.style.background = "#ff5555";
};
block3.onmouseleave = function (){
    block3.style.background = "#b6f5f5";
};
function f(number){
var title = "Новость";
var news = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!";
var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.";
var elem = document.getElementById('all');
elem.style.display = 'block';
if (number=="1") {document.getElementById('window').innerHTML ="<h1>" + title + " 1" + "</h1>" + "<p>" + title + " 1: " + news + "<br>" + text + "</p>";}
if (number=="2") {document.getElementById('window').innerHTML ="<h1>" + title + " 2" + "</h1>" + "<p>" + title + " 2: " + news + "<br>" + text + "</p>";}
if (number=="3") {document.getElementById('window').innerHTML ="<h1>" + title + " 3" + "</h1>" + "<p>" + title + " 3: " + news + "<br>" + text + "</p>";}
};
all.onclick = function (){
    all.style.display = "none";
};