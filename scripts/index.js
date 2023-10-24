const burger = document.querySelector(".header__icon_burger");
const menu = document.querySelector(".header__nav");
const menuLink = Array.from(document.querySelectorAll(".header__link"));
const inputName = document.querySelector('.form__input_name');
const inputPhone = document.querySelector('.form__input_phone');

function handleClickBurger(e) {
  e.target.classList.toggle("header__icon_close");
  menu.classList.toggle("header__nav_visible");
}

function handleMenuLink() {
  menu.classList.remove("header__nav_visible");
  burger.classList.toggle("header__icon_close");
}

function handleValidInput(){
    if (this.validity.valid) {
      this.nextElementSibling.classList.remove("form__error_visible");
    } else {
      this.nextElementSibling.classList.add("form__error_visible");
    }
}

/** подставить +7 в поле номера телефона */
function addCodePhone() {
  if (!this.value) {
    this.value = "+7";
    this.nextElementSibling.classList.remove("form__error_visible");
  }
}

burger.addEventListener("mousedown", handleClickBurger);
menuLink.forEach((link) => link.addEventListener("click", handleMenuLink));
inputName.addEventListener('input', handleValidInput);
inputPhone.addEventListener('input', handleValidInput);
inputPhone.addEventListener("focus", addCodePhone);
