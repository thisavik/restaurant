window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const arr = ["banner", "about", "menu", "expert", "testimonials", "contact"];

menuToggle.onclick = () => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

const removeActive = () => {
  console.log("clicked");
  if (menuToggle.classList.contains("active")) {
    menuToggle.classList.remove("active");
    navigation.classList.remove("active");
  }
};
