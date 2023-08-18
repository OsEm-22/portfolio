const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const bs = document.querySelector(".bs");
const jquery = document.querySelector(".jquery");
const php = document.querySelector(".php");
const laravel = document.querySelector(".laravel");
const vue = document.querySelector(".vue");
const skillBtn = document.querySelector(".skill-btn");

let style = document.createElement("style");

// TO UPDATE EASILY
let skills = [
  { issue: html, points: 100, language: "html" },
  { issue: css, points: 80, language: "css" },
  { issue: js, points: 80, language: "js" },
  { issue: bs, points: 80, language: "bs" },
  { issue: jquery, points: 50, language: "jquery" },
  { issue: php, points: 70, language: "php" },
  { issue: laravel, points: 10, language: "laravel" },
  { issue: vue, points: 10, language: "vue" },
];

// ANIMATE SINCE WINDOW FIRST LOAD
animateBar(skills);

// ANIMATE ON SKILL-BUTTON CLICK
skillBtn.addEventListener("click", () => {
  style.innerHTML = "";
  skills.forEach((skill) => {
    style.innerHTML += `
      .${skill.language} {
        animation: null;
      }
    `;
  });
  setTimeout(() => animateBar(skills), 50);
});

// setting relative skill points for each language
function animateBar(items) {
  style.innerHTML = "";
  items.forEach((item) => {
    let counter = 0;
    const timer = setInterval(() => {
      item.issue.textContent = `${counter}%`;
      if (counter === item.points) {
        clearInterval(timer);
      } else {
        counter++;
      }
    }, 2000 / item.points); // progress points to keep step with progress bar animation 2s

    style.innerHTML += `
      .${item.language} {
        animation: ${item.language} 2s ease-out forwards;
      }
  
      @keyframes ${item.language} {
        0% {
          width: 0%;
        }
        100% {
          width: ${item.points}%;
        }
      }
    `;
  });
  document.head.appendChild(style);
}
