const education = document.getElementById("education");

const Education = document.querySelector(".Education");
const experience = document.getElementById("experience");
const Experience = document.querySelector(".Experience");
const skills = document.getElementById("skills");
const Skills = document.querySelector(".Skills");

education.addEventListener("click", () => {
  if (Education.classList.contains("show-education")) {
    Education.classList.remove("show-education");
  } else {
    Education.classList.add("show-education");
    Experience.classList.remove("show-experience");
    Skills.classList.remove("show-skills");
  }
});
experience.addEventListener("click", () => {
  if (Experience.classList.contains("show-experience")) {
    Experience.classList.remove("show-experience");
  } else {
    Experience.classList.add("show-experience");
    Education.classList.remove("show-education");
    Skills.classList.remove("show-skills");
  }
});
skills.addEventListener("click", () => {
  if (Skills.classList.contains("show-skills")) {
    Skills.classList.remove("show-skills");
  } else {
    Skills.classList.add("show-skills");
    Experience.classList.remove("show-experience");
    Education.classList.remove("show-education");
  }
});

// .......................................

var sidemenu = document.getElementById("sidemenu");

function opennavbar() {
  sidemenu.style.right = "0px";
}
function closenavbar() {
  sidemenu.style.right = "-200px";
}
