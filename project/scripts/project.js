const heading = document.getElementById('heading');
const items = document.querySelectorAll('.header_list a');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.header_list');

// Add an event listener to each list item
items.forEach(item => {
    // Explicitly pass the event parameter
    item.addEventListener('click', (event) => {
      // Prevent any default action (like form submission or link navigation)
      event.preventDefault();
  
      // Update the heading text to the clicked item's text
      heading.textContent = event.target.textContent;
    });
  });

hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/fa732e30be6a337aa7d4c46a4b3729b60ce9f70d/full/320%2C/0/default"
  },
  {
    templeName: "San Diego",
    location: "San Diego, California",
    dedicated: "1998, February, 27",
    area: 72000,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/ed69cd03cbe9b861c5962486435ca334fd9b27f1/full/320%2C/0/default"
  },
  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona",
    dedicated: "1927, October, 23",
    area: 75000,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/9d96b5359c76ba46dc9b5707c8fdca8c20883f0a/full/320%2C/0/default"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1853, February, 14",
    area: 382207,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/b600d848a78a2d84e0a0c68b8fdee347af47fe4d/full/320%2C/0/default"
  }
  // Add more temple objects here...
];
const home_pages = [
  {
    tile_Name: "Finance",
    imageUrl:"images/finances.jpg"
  },
  {
    tile_Name: "Bills",
    imageUrl:"images/bills.jpg"
  },
  {
    tile_Name: "Games",
    imageUrl:"images/game.jpg"
  },
  {
    tile_Name: "Food",
    imageUrl:"images/food.jpg"
  },
  {
    tile_Name: "School",
    imageUrl:"images/school.jpg"
  },
  {
    tile_Name: "E-mail",
    imageUrl:"images/email.jpg"
  },
  {
    tile_Name: "AI",
    imageUrl:"images/ai.jpg"
  },
  {
    tile_Name: "Contact",
    imageUrl:"images/contact.jpg"
  }
];
const finance_pages = [
  {
    tile_Name: "UCCU",
    site_Url: "www.uccu.com",
    imageUrl:"images/uccu.webp"
  },
  {
    tile_Name: "Fidelity",
    site_Url: "www.uccu.com",
    imageUrl:"images/fidelity.webp"
  },
  {
    tile_Name: "Robinhood",
    site_Url: "https://robinhood.com/login/",
    imageUrl:"images/robinhood.webp"
  },
  {
    tile_Name: "Alto",
    site_Url: "https://auth.altoira.com/u/login",
    imageUrl:"images/uccu.webp"
  }
];

const smallTemples = document.querySelector("#small")
const largeTemples = document.querySelector("#large")
const oldTemples = document.querySelector("#old")
const newTemples = document.querySelector("#new")
const home_categories = document.querySelector("#home")

smallTemples.addEventListener("click",() => {
  createTempleCard(temples.filter(temple => temple.area < 10000))
});
largeTemples.addEventListener("click",() => {
  createTempleCard(temples.filter(temple => temple.area > 90000))
});
oldTemples.addEventListener("click",() => {
  createTempleCard(temples.filter(temple => temple.dedicated < "1900"))
});
newTemples.addEventListener("click",() => {
  createTempleCard(temples.filter(temple => temple.dedicated > "2000"))
});
home_categories.addEventListener("click",() => {
  create_Home_Card(home_pages)
});

create_Home_Card(home_pages);

createTempleCard(temples);

function create_Home_Card(filtered_tiles) {
  document.querySelector(".images_grid").innerHTML = "";
  filtered_tiles.forEach(home_page => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let img = document.createElement("img");

    name.textContent = home_page.tile_Name;
    img.setAttribute("src", home_page.imageUrl);
    img.setAttribute("alt", `${home_page.tile_Name}`);
    card.classList.add("card");
    card.appendChild(name);
    card.appendChild(img);

    document.querySelector(".images_grid").appendChild(card);
  });
}
function createTempleCard(filteredTemples) {
  document.querySelector(".images_grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.location} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("src", temple.imageUrl);
    
    card.classList.add("card");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".images_grid").appendChild(card);

  });
}