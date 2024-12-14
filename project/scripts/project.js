
const items = document.querySelectorAll('.header_list a');
const navigation = document.querySelector('.header_list');
const category_img = document.querySelector('#category');

// Add an event listener to each list item
items.forEach(item => {
    // Explicitly pass the event parameter
    item.addEventListener('click', (event) => {
      // Prevent any default action (like form submission or link navigation)
      event.preventDefault();
    });
  });

const pages = [
  {
    tile_Name: "UCCU",
    category: "Finance",
    site_Url: "https://www.uccu.com",
    imageUrl:"images/uccu.jpg"
  },
  {
    tile_Name: "Fidelity",
    category: "Finance",
    site_Url: "https://www.fidelity.com",
    imageUrl:"images/fidelity.jpg"
  },
  {
    tile_Name: "Robinhood",
    category: "Finance",
    site_Url: "https://robinhood.com/login/",
    imageUrl:"images/robinhood.jpg"
  },
  {
    tile_Name: "Alto",
    category: "Finance",
    site_Url: "https://auth.altoira.com/u/login",
    imageUrl:"images/alto.jpg"
  },
  {
    tile_Name: "Google Fibre",
    category: "Bills",
    site_Url: "https://fiber.google.com/",
    imageUrl:"images/GoogleFiber.jpg"
  },
  {
    tile_Name: "Electric",
    category: "Bills",
    site_Url: "https://www.rockymountainpower.net/",
    imageUrl:"images/Rockymountainpower.jpg"
  },
  {
    tile_Name: "Grub Hub",
    category: "Food",
    site_Url: "https://www.grubhub.com/",
    imageUrl: "images/grubhub.jpg"
  },
  {
    tile_Name: "ChatGPT",
    category: "AI",
    site_Url: "https://chatgpt.com/",
    imageUrl:"images/chatgpt.jpg"
  },
  {
    tile_Name: "Claude",
    category: "AI",
    site_Url: "https://claude.ai",
    imageUrl:"images/claude.jpg"
  },
  {
    tile_Name: "Hangman",
    category: "Games",
    site_Url: "hangman.html",
    imageUrl:"images/hangman.jpg"
  },
  {
    tile_Name: "Gmail",
    category: "email",
    site_Url: "https://mail.google.com/",
    imageUrl:"images/gmail.jpg"
  },
  {
    tile_Name: "BYUI",
    category: "School",
    site_Url: "https://degreeportal.byupathway.org/?providerId=8389",
    imageUrl:"images/byui.jpg"
  },
  {
    tile_Name: "Suggestions",
    category: "Contact",
    site_Url: "suggestions.html",
    imageUrl:"images/contact.jpg"
  }
];

const games = document.querySelector("#games")
const food = document.querySelector("#food")
const bills = document.querySelector("#bills")
const finance = document.querySelector("#finance")
const home = document.querySelector("#home")

games.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "Games"), "images/games2.jpg")
});
food.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "Food"), "images/food.jpg")
});
finance.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "Finance"), "images/finance.jpg")
});
bills.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "Bills"), "images/bills.jpg")
});
home.addEventListener("click",() => {
  create_Card(pages, "images/family.jpg")
});

create_Card(pages);

function create_Card(filtered_tiles, img="images/family.jpg") {
  category_img.setAttribute("src", img);
  document.querySelector(".images_grid").innerHTML = "";
  filtered_tiles.forEach(page => {
    let anchor = document.createElement("a"); // Create an anchor element
    let card = document.createElement("section");
    let name = document.createElement("h5");
    let img = document.createElement("img");

    name.textContent = page.tile_Name;
    img.setAttribute("src", page.imageUrl);
    img.setAttribute("alt", `${page.tile_Name}`);

    card.classList.add("card");
    card.appendChild(name);
    card.appendChild(img);

    // Set anchor attributes
    anchor.setAttribute("href", page.site_Url);
    anchor.setAttribute("target", "_blank");
    anchor.appendChild(card); // Wrap the card inside the anchor

    document.querySelector(".images_grid").appendChild(anchor);
  });
}

