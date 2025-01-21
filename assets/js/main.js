/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== SHOW MODALCART ===============*/
const modalCart = document.getElementById("modal-cart"),
  modalButton = document.getElementById("modal-cart-button"),
  modalClose = document.getElementById("modal-cart-close");

/*===== MODALCART SHOW =====*/
/* Validate if constant exists */
if (modalButton) {
  modalButton.addEventListener("click", () => {
    modalCart.classList.add("modal__show");
  });
}

/*===== MODALCART HIDDEN =====*/
/* Validate if constant exists */
if (modalClose) {
  modalClose.addEventListener("click", () => {
    modalCart.classList.remove("modal__show");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 72 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 72
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop + 0,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 384 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 384
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Function to set the theme based on user preference or system preference
const setTheme = (theme, icon) => {
  document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[icon === "ri-moon-line" ? "add" : "remove"](iconTheme);
  localStorage.setItem("selected-theme", theme);
  localStorage.setItem("selected-icon", icon);
};

// Check for system preference
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initial theme setup: Check local storage first, then system preference
if (selectedTheme) {
  setTheme(selectedTheme, selectedIcon);
} else if (prefersDarkMode) {
  setTheme("dark", "ri-moon-line"); // Set dark theme and moon icon
}

// Listen for changes in system preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (!localStorage.getItem("selected-theme")) {
      // Only change if user hasn't manually set a theme
      setTheme(
        event.matches ? "dark" : "light",
        event.matches ? "ri-moon-line" : "ri-sun-line"
      );
    }
  });

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Toggle the theme and icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Update local storage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());

  //If the user clicks the button, we want to stop listening to system preferences
  //so that the user's choice is respected.
});

/*=============== DYNAMIC YEAR ===============*/
let year = document.getElementById("year");
let dynamicYear = new Date().getFullYear();
year.innerHTML = dynamicYear;
