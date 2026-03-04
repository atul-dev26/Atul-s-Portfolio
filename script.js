const scroll = new LocomotiveScroll({
  el: document.querySelector('#mainContent'),
  smooth: true
});
const PROFILE_PIC_PATH = "./assets/profile-pic.jpeg";

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function changeImageDark() {
  var img = document.getElementById("profile-pic");
  img.src = PROFILE_PIC_PATH;
}

function changeImageLight() {
  var img = document.getElementById("profile-pic");
  img.src = PROFILE_PIC_PATH;
}

function changeImage() {
  var img = document.getElementById("profile-pic");
  
  // Retrieve mode from localStorage
  var mode = localStorage.getItem("mode");

  // Default to "light" if mode is not set or invalid
  if (!mode || (mode !== "dark" && mode !== "light")) {
      mode = "light";
  }

  if (mode === "dark") {
      img.src = PROFILE_PIC_PATH;
  } else if (mode === "light") {
      img.src = PROFILE_PIC_PATH;
  }
}
