import navbar from "./navbar.js";

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML = navbar();

let span_div = document.getElementById("spanclick");

span_div.addEventListener("click", () => {
    displaylist()
})

function displaylist() {
    var nav = document.getElementById("menu")

    if(nav.style.display == "block") {
        nav.style.display = "none";
    }
    else{
        nav.style.display = "block";
        nav.style.position = "absolute";
        nav.style.marginTop = "450px";
        nav.style.width = "300px";
        nav.style.marginLeft = "-100px";

      
    }
    
}



let submenu = document.querySelector(".drop-down-menu");

let dropdown = document.getElementById("dropdown")

dropdown.addEventListener("click", () => {
  
    if(submenu.style.display == "block"){
        submenu.style.display = "none"
    }
    else{
        submenu.style.display = "block";
        submenu.style.position = "absolute";
    }
})



window.onresize = function(event) {
  document.location.reload(true);
}

if(localStorage.getItem("login") == "login") {
    document.getElementById("btn1").innerHTML = "Log out"; 
}

document.getElementById("btn1").addEventListener("click", ()=> {
    if(localStorage.getItem("login") == "login") {
        document.getElementById("btn1").innerHTML = "Log out";
        localStorage.removeItem("login");
        let goto = localStorage.getItem("location")
        window.location.href = goto;
    }else{
        window.location.href = "../html/login.html";
    }
})


if(localStorage.getItem("location") != null) {
    localStorage.setItem("location" , "../html/homepage.html")
}else{
    localStorage.setItem("location" , "../html/homepage.html")
}

if(localStorage.getItem("login") == "login") {
    document.getElementById("btn1").innerHTML = "Log out"
}


document.getElementById("lumen_intro_img").addEventListener("click", ()=>{
    lightbox_open()
})

document.getElementById("light").addEventListener("click", ()=>{
    video.pause();
})

document.getElementById("fade").addEventListener("click", ()=>{
    lightbox_close()
})


function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}
function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}


let myvideo = document.querySelectorAll(".video-card");

for(var i = 0; i < myvideo.length; i++) {

    myvideo[i].addEventListener("click", ()=> {
        this.play();
    })
}

document.querySelector(".next").addEventListener("click", ()=> {
    plusDivs(1)
})

document.querySelector(".previous").addEventListener("click", ()=> {
    plusDivs(-1)
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("class2");
  if (n > x.length) {
    slideIndex = 1;
  }
  console.log(x, n);
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}