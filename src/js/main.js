import 'swiper/css';
import "./vendor/lazyload";
import "./vendor/lazysized.unveilhooks";
import "./vendor/libs/hystmodal.min.css";
import "./vendor/libs/hystmodal.min.js";

import Slider from "./vendor/slider";
import modals from "./vendor/modals";
import validation from "./vendor/validation";
import phoneMask from "./vendor/inputMask";

import InitBurgerModal from "./modules/burgerModal"
import Accordions from "./modules/accordion";

document.addEventListener("DOMContentLoaded", () => {
  window.letai = {};

  modals()
  validation()
  phoneMask()
  const sliderInstance = new Slider();
  sliderInstance.initializeSliders();
  
  InitBurgerModal()
  function accordion() {
    if (!document.querySelector(".js-accordions")) return;
    
    new Accordions({
      selectors: {
        container: '.js-accordions',
        wrapper: '.js-accordion',
        button: '.js-accordion-btn',
        content: '.js-accordion-content'
      }
    });
  }
  accordion()
});
