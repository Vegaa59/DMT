function myFunction() {
  let x = document.getElementById("topnav");
  if (x.className === "link") {
    x.className += " responsive";
  } else {
    x.className = "link";
  }
}
function nav() {
  let y = document.getElementById("sous_menu");
  if (y.className === "menu_deroulant") {
    y.className += " responsive_menu";
  } else {
    y.className = "menu_deroulant";
  }
}

function nav2() {
  let z = document.getElementById("sous_menu2");
  if (z.className === "menu_deroulant") {
    z.className += " responsive_menu";
  } else {
    z.className = "menu_deroulant";
  }
}
function nav3() {
  let z = document.getElementById("sous_menu3");
  if (z.className === "menu_deroulant") {
    z.className += " responsive_menu";
  } else {
    z.className = "menu_deroulant";
  }
}

// ----------scroll reveal----------

ScrollReveal().reveal(".bloc_logo", {
  origin: "top",
  distance: "100px",
  duration: 1000,
  interval: 100,
});
