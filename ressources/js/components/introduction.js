import { intro } from "../data/carousel.js";
import { createElement } from "../function/dom.js";
import { carouselInitialisation } from "./carousel.js";

export function generateIntroduction() {
  const container = document.getElementById("intro");
  const footer = document.getElementById("footer");
  container.innerHTML = "";

  const soldesContainer = createElement("div", { class: "intro_soldes" });

  const price = createElement("div", { class: "intro_price" });
  const footerBackground = createElement("div", { class: "bg_footer" });

  const contentFooter = createElement("div", { class: "content_footer" });

  soldesContainer.innerHTML = `<img src="./${intro[0].soldes}" alt="SOLDES"  />`;

  price.innerHTML = `<img src="./${intro[0].price}" alt="SOLDES"  />`;

  footerBackground.innerHTML = `<img src="./${intro[0].footer?.background}" alt="SOLDES"  />`;

  contentFooter.innerHTML = `<p>${intro[0].footer?.content[0]}</p><p>${intro[0].footer?.content[1]}</p><a href="https://${intro[0].footer?.condition[0].link}" target="#blank">${intro[0].footer?.condition[0].label}</a>`;
  container.appendChild(soldesContainer);
  container.appendChild(price);
  footer.classList.add("bg_footer");
  footer.appendChild(contentFooter);
}

// export function removeIntro() {
//   const container = document.getElementById("intro");
//   const contentFooter = document.getElementsByClassName("content_footer")[0]; // Accessing the first element

//   function triggerInterval() {
//     // Add class after 2000 milliseconds
//     const fadeInterval = setInterval(function () {
//       container.classList.add("fade");
//       contentFooter.classList.add("fade");
//     }, 2000);

//     // Trigger carousel initialization after 2500 milliseconds
//     const carouselInterval = setInterval(function () {
//       carouselInitialisation();
//     }, 2500);
//     triggerInterval();

//     // Clear intervals when needed
//     setTimeout(
//       function () {
//         clearInterval(fadeInterval, 4000);
//         clearInterval(carouselInterval, 4500);
//       } /* Some appropriate time to clear the intervals */
//     );
//   }

//   // Call triggerInterval() function
// }
