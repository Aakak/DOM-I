const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Code Starts Here

//Navigation

const nav = document.querySelectorAll("a");
nav.forEach((e, index) => {
  e.textContent = siteContent["nav"][`nav-item-${index + 1}`];
});

//cta h1
const headerText = document.querySelector("h1");
headerText.textContent = siteContent.cta.h1;

//cta button
const mainButton = document.querySelector("button");
mainButton.innerText = siteContent.cta.button;

// Circle Img
const circleImg = document.querySelector("#cta-img");
circleImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Middle Image
const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//All h4's
const header = document.querySelectorAll("h4");
header[0].textContent = siteContent["main-content"]["features-h4"];
header[1].textContent = siteContent["main-content"]["about-h4"];
header[2].textContent = siteContent["main-content"]["services-h4"];
header[3].textContent = siteContent["main-content"]["product-h4"];
header[4].textContent = siteContent["main-content"]["vision-h4"];
header[5].textContent = siteContent["contact"]["contact-h4"];

// Main Text
const mainText = document.querySelectorAll(".text-content p");
mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//Footer
const footerText = document.querySelector("footer");
footerText.textContent = siteContent["footer"]["copyright"];
