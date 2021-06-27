let searchBar = document.querySelector(".search-bar");
let toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    searchBar.classList.add("fixed-nav");
  }
  if (window.scrollY >= 80) {
    toTop.classList.add("see");
  } else {
    toTop.classList.remove("see");
    searchBar.classList.remove("fixed-nav");
  }
});

let cardJson = [
  {
    src: "img/xiaomi.jpg",
    loc: "Cell Phones, Xiaomi",
    price: "$55.00",
    name: "Xiaomi MI Mix 2",
    sale: "",
    saleBtn: "d-none",
  },
  {
    src: "img/onePlus.jpg",
    loc: "Cell Phones, OnePlus",
    price: "$120.00",
    name: "OnePlus 5T",
    sale: "",
    saleBtn: "d-none",
  },
  {
    src: "img/vr.jpg",
    loc: "Computer Hardware, <br /> Daydream View",
    price: "$400.00",
    name: "Google Daydream VR",
    sale: "$420.00",
    saleBtn: "d-block",
  },
  {
    src: "img/musicThing.jpg",
    loc: "Acoustics, Computer <br /> Hardware",
    price: "$400.00",
    name: "JBL Pulse 3",
    sale: "",
    saleBtn: "d-none",
  },
];

let cardJsonTwo = [
  {
    src: "img/black.jpg",
    loc: "Apple, Smart Watches",
    price: "$269.00",
    name: "Misfit Shine 2",
    sale: "",
    saleBtn: "d-none",
  },
  {
    src: "img/klavish.jpg",
    loc: "Computer Hardware, <br /> Keyboards",
    price: "$55.00",
    name: "Bluetooth Keyboard",
    sale: "$420.00",
    saleBtn: "`d-none",
  },
  {
    src: "img/yellow.jpg",
    loc: "Smart Watches, Sony",
    price: "$327.00",
    name: "Sony Watch Series F",
    sale: "",
    saleBtn: "d-none",
  },
  {
    src: "img/nokia.jpg",
    loc: "Cell Phones, Motorola",
    price: "$280.00",
    name: "Nokia 6 Dual Sim Tempered Blue",
    sale: "",
    saleBtn: "d-none",
  },
];

let cardJsonThree = [
  {
    src: "img/i6.jpg",
    loc: "Cell Phones, IPhone",
    price: "$700.00",
    name: "Apple iPhone 6 16GB",
    sale: "",
    saleBtn: "d-none",
  },
  {
    src: "img/doubleI6.jpg",
    loc: "Cell Phones, IPhone",
    price: "$400.00",
    name: "Apple iPhone 6",
    sale: "",
    saleBtn: "d-none",
  },
  {
    src: "img/xiaomi.jpg",
    loc: "Cell Phones, Xiaomi",
    price: "$55.00",
    name: "Xiaomi Mi Mix 2",
    sale: "",
    saleBtn: "d-none",
  },
  {
    src: "img/IPad.jpg",
    loc: "Apple iPads Mini, Tablets",
    price: "$200.00",
    name: "Refurbished iPad Mini 4th",
    sale: "",
    saleBtn: "d-none",
  },
];

let cardJsonFour = [
  {
    src: "img/bluePhone.jpg",
    loc: "Cell Phones, Meizu",
    price: "$350.00",
    name: "Meizu M6 Note Blue",
    sale: "$400.00",
    saleBtn: "d-block",
  },
  {
    src: "img/mouse.jpg",
    loc: "Computer Hardware, Mice",
    price: "$50.00",
    name: "Apple Magic Mouse",
    sale: "$60.00",
    saleBtn: "d-block",
  },
  {
    src: "img/hp.jpg",
    loc: "Asus, Laptops",
    price: "$900.00",
    name: "Asus Zenbook ux360ca",
    sale: "$1,100.00",
    saleBtn: "d-block",
  },
  {
    src: "img/watch.jpg",
    loc: "Samsung, Smart Watches",
    price: "$20.00",
    name: "Samsung Gear Blue",
    sale: "$40.00",
    saleBtn: "d-block",
  },
];

let h3 = document.querySelectorAll(".navigation > h3"),
  card = document.querySelectorAll(".sp-card"),
  img = document.querySelectorAll(".sp-card > img"),
  loc = document.querySelectorAll(".loc"),
  sale = document.querySelectorAll(".sp-sale"),
  spName = document.querySelectorAll(".sp-name"),
  spPrice = document.querySelectorAll(".sp-card > .sp-text span");

h3[0].addEventListener("click", () => {
  h3[0].classList.add("clck");
  h3[1].classList.remove("clck");
  h3[2].classList.remove("clck");
  h3[3].classList.remove("clck");
  card.forEach((card, i) => {
    img[i].src = cardJson[i].src;
    loc[i].innerHTML = cardJson[i].loc;
    spName[i].innerHTML = cardJson[i].name;
    spPrice[i].innerHTML = `${cardJson[i].price} <del>${cardJson[i].sale}</del>`;
    sale[i].classList.add(cardJson[i].saleBtn);
    card.style.paddingBottom = "20px";
  });
});

h3[1].addEventListener("click", () => {
  h3[0].classList.remove("clck");
  h3[1].classList.add("clck");
  h3[2].classList.remove("clck");
  h3[3].classList.remove("clck");
  card.forEach((card, i) => {
    img[i].src = cardJsonTwo[i].src;
    loc[i].innerHTML = cardJsonTwo[i].loc;
    spName[i].innerHTML = cardJsonTwo[i].name;
    spPrice[i].innerHTML = `${cardJsonTwo[i].price} <del>${cardJsonTwo[i].sale}</del>`;
    sale[i].classList.add(cardJsonTwo[i].saleBtn);
    card.style.paddingBottom = "10px";
  });
});

h3[2].addEventListener("click", () => {
  h3[0].classList.remove("clck");
  h3[1].classList.remove("clck");
  h3[2].classList.add("clck");
  h3[3].classList.remove("clck");
  card.forEach((card, i) => {
    img[i].src = cardJsonThree[i].src;
    loc[i].innerHTML = cardJsonThree[i].loc;
    spName[i].innerHTML = cardJsonThree[i].name;
    spPrice[i].innerHTML = `${cardJsonThree[i].price} <del>${cardJsonThree[i].sale}</del>`;
    sale[i].classList.add(cardJsonThree[i].saleBtn);
    card.style.paddingBottom = "0";
  });
});

h3[3].addEventListener("click", () => {
  h3[0].classList.remove("clck");
  h3[1].classList.remove("clck");
  h3[2].classList.remove("clck");
  h3[3].classList.add("clck");
  card.forEach((card, i) => {
    img[i].src = cardJsonFour[i].src;
    loc[i].innerHTML = cardJsonFour[i].loc;
    spName[i].innerHTML = cardJsonFour[i].name;
    spPrice[i].innerHTML = `${cardJsonFour[i].price} <del>${cardJsonFour[i].sale}</del>`;
    sale[i].classList.remove("d-none");
    sale[i].classList.add(cardJsonFour[i].saleBtn);
    card.style.paddingBottom = "0";
  });
});

let down = document.querySelector("i.fas.fa-chevron-down");

down.addEventListener("click", () => {
  let parent = document.querySelector("#opening-content");
  parent.classList.toggle("big");
});
