var i = 0;

function rigth() {
  
  i++;
  if (i == 5) {
    i = 4;
  }
  
  show();
}

function left() {
  i--;
  if (i == -1) {
    i = 0;
  }
  show();
}

function show() {
  
  if (i == 0) {
    document.getElementById("card_slider").style.transform = "translateX(0)";
  }
  if (i == 1) {
    document.getElementById("card_slider").style.transform =
      "translateX(-400px)";
  }
  if (i == 2) {
    document.getElementById("card_slider").style.transform =
      "translateX(-800px)";
  }
  if (i == 3) {
    document.getElementById("card_slider").style.transform =
      "translateX(-1200px)";
  }
  if (i == 4) {
    document.getElementById("card_slider").style.transform =
      "translateX(-1600px)";
  }
  
}

// =============
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    document.getElementById("scroll").style.opacity = ("1");
  } else {
    document.getElementById("scroll").style.opacity = ("0");
  }
})

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.backgroundColor = "#eff5f5ee";
    document.querySelector("logo").style.color = "#497174";
    
  } else {
    document.getElementById("nav").style.position = "relative";
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.querySelector("logo").style.color = "#eff5f5ee";
    
  }
});