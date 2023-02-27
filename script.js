
// select image
const image = document.querySelectorAll(".image");

image.forEach(e => e.addEventListener("click",function(){
    image.forEach(e=>e.classList.remove("active"));
    this.classList.add("active");
}));

// display page

function openPage(pageName,element){
    const header = document.getElementsByClassName("header");
    for(let i = 0; i < header.length; i++){
        header[i].style.display="none";
    }
    document.getElementById(pageName).style.display="block";
}
document.getElementById("defaultOpen").click();



// navigation active
const nav = document.querySelectorAll(".nav-a");

nav.forEach(e => e.addEventListener("click",function(){
    nav.forEach(e=>e.classList.remove("color"));
    this.classList.add("color");
}));