window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //$("#nav-bar").attr("style","padding:0px 0px") jquery framework
    document.getElementById("nav-bar").style.padding = "0px 0px";  
    document.getElementById("navbar").style.padding = "0px 20px";
    document.getElementById("logo").style.width = "63px";
    document.getElementById("logo-title").style.fontSize = "0px";
    document.getElementById("nav-bar").style.boxShadow = "2px 5px 10px 1px rgb(0, 0, 0)";
    document.getElementById('navbar1').style.fontSize = "25px";
    document.getElementById('navbar2').style.fontSize = "25px";
    document.getElementById('dropbtn').style.fontSize = "25px";

    } 
  else {
    document.getElementById("nav-bar").style.padding = "30px 0px";
    document.getElementById("navbar").style.padding = "18px 20px";
    document.getElementById("logo").style.width = "100px";
    document.getElementById("logo-title").style.fontSize = "35px";
    document.getElementById("nav-bar").style.boxShadow = "0 0 0 0 rgb(0, 0, 0)";
    document.getElementById('navbar1').style.fontSize = "35px";
    document.getElementById('navbar2').style.fontSize = "35px";
    document.getElementById('dropbtn').style.fontSize = "35px";
  }
}


function myFunction(x) {
  x.classList.toggle("change");
  console.log(x.className)
  if(x.className == "hamburger"){
    document.getElementById("navbar").style.display = "none";
  } else{
    document.getElementById("navbar").style.display = "inline-block";
  }
}

function autoClose(){
  myFunction(document.getElementById("hamburger"));
}

window.scrollTo(0,document.getElementById("prog-lang").off-100);
