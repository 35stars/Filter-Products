const items = [
  {
    name: "choco",
    price: 60,
    img: "images/choco-milkshake.jpeg",
    category: "shakes",
  },
  {
    name: "oreo",
    price: 70,
    img: "images/oreo-milkshake.png",
    category: "shakes",
  },
  {
    name: "peanutbutter",
    price: 80,
    img: "images/peanutbutter-shake.png",
    category: "shakes",
  },
  {
    name: "strawberry",
    price: 80,
    img: "images/strawberry-shake.jpeg",
    category: "shakes",
  },
  {
    name: "zucchini",
    price: 50,
    img: "images/zucchini-burger.jpeg",
    category: "burgers",
  },
  {
    name: "chori",
    price: 70,
    img: "images/chori-burger.jpg",
    category: "burgers",
  },
  {
    name: "vege Style",
    price: 50,
    img: "images/vege-burger.png",
    category: "burgers",
  },
];

const buttons = document.querySelector("#buttons-div");

const root = document.querySelector("#root");

const uniqueBtns = [
  `<button>all</button>`,
  ...new Set(items.map((obj) => `<button>${obj.category}</button>`)),
];

products(items);
function products(items) {
  let data = items
    .map((obj) => {
      let firstLtr = obj.name.substring(0, 1).toUpperCase();
      return `
          <div class="items">
            <img class="product-img" src= ${obj.img}>
            <p class="name">${firstLtr + obj.name.substring(1)}</p>
            <p class="price">Price:${parseFloat(obj.price).toLocaleString(
              undefined,
              {
                style: "currency",
                currency: "PHP",
              }
            )}</p>
          </div>
      `;
    })
    .join("");

  root.innerHTML = data;
}

buttons.innerHTML = uniqueBtns.join("").toUpperCase();

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.onclick = (event) => {
    const target = event.target.textContent;

    let data = items.filter((obj) => {
      if (target.toLowerCase().match(obj.category.toLowerCase())) {
        return obj.category;
      }
    });

    if (target.toLowerCase().match("all")) {
      products(items);
    } else products(data);
  };
});
