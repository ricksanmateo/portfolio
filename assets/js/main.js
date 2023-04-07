let toggle = document.querySelector(".toggle-bar");

toggle.onclick = function() {
  let navBar = document.querySelector(".navigation-bar")
  if (navBar.style.display === "none") {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
  console.log("click");
}