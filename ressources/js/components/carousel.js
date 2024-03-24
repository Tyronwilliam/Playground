
import { carouselData, previewProduct } from "../data/carousel.js";
import { createElement } from "../function/dom.js";

export function carouselInitialisation() {
  const container = document.getElementById("carousel");
  const containerIntro = document.getElementById("intro");
  const footer = document.getElementById("footer");
  const contentFooter = document.getElementsByClassName("content_footer")[0];
  const currentIndex = 0;

  function showSlide(index) {
    clearElement(container);
    clearElement(containerIntro);
    clearElement(footer);
    footer.classList.add("footer_product");

    const blockCarousel = createElement("div", { class: "container-carousel" });
    const blockImageAndBrand = createElement("div", {
      class: "container-image_brand",
    });
    const blockImage = createElement("div", { class: "container-image" });
    const blockBrand = createElement("div", { class: "container-brand" });
    const blockButton = createElement("div", { class: "container-button" });
    const blockDescription = createElement("div", {
      class: "container-description",
    });
    const blockPreview = createElement("div", { class: "container-preview" });
    const divContent = createElement("div", { class: "content" });

    blockImage.innerHTML = `<img src="${carouselData[index].product}" alt="Product" />`;
    blockBrand.innerHTML = `<img src="${carouselData[index].brand_logo}" alt="Brand Logo" />`;
    blockImageAndBrand.appendChild(blockImage);
    blockImageAndBrand.appendChild(blockBrand);

    const discountImage = createElement("img", {
      src: carouselData[index].description.discount,
      alt: "Discount",
    });
    const divDiscountImage = createElement("div")
    divDiscountImage.appendChild(discountImage);
    blockDescription.appendChild(divDiscountImage);

    previewProduct.forEach((item, idx) => {
      const previewImage = createElement("img", {
        src: item.product,
        alt: "Product Preview",
      });
      const previewDiv = createElement("div");
      previewDiv.appendChild(previewImage);
      previewDiv.addEventListener("click", () => showSlide(idx));
      blockPreview.appendChild(previewDiv);
    });

    carouselData[index].description.content?.forEach((item) => {
      const pElement = createElement("p");
      pElement.innerText = item;
      divContent.appendChild(pElement);
    });

    carouselData[index].description.cta?.forEach((item) => {
      const button = createElement("button");
      button.innerHTML = `<img src="${item.image}" alt="CTA"/>`;
      blockButton.appendChild(button);
    });

    blockDescription.appendChild(divContent);
    blockDescription.appendChild(blockButton);
    blockCarousel.appendChild(blockImageAndBrand);
    blockCarousel.appendChild(blockPreview);
    container.appendChild(blockCarousel);
    footer.appendChild(blockDescription);
  }

  function clearElement(element) {
    if (element) {
      element.innerHTML = "";
    }
  }

  function fadeInContent() {
    containerIntro.classList.add("fade");
    contentFooter.classList.add("fade");
    footer.classList.remove("bg_footer");
    footer.classList.add("bg_white");
  }

  function initializeCarousel() {
    setTimeout(() => {
      clearElement(container);
      clearElement(containerIntro);
      clearElement(contentFooter);
      clearElement(footer);
      fadeInContent();
      showSlide(currentIndex);
    }, 3000);
  }

  initializeCarousel();
}
