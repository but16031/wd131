
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

const menu = document.querySelector("#logo");
const games = document.querySelector("#games");
const ai = document.querySelector("#ai");
const food = document.querySelector("#food");
const bills = document.querySelector("#bills");
const finance = document.querySelector("#finance");
const home = document.querySelector("#home");
const byui = document.querySelector("#byui");
const email = document.querySelector("#email");
const header = document.querySelector(".header_list");
const dark_theme = document.querySelector("#dark_theme");
const light_theme = document.querySelector("#light_theme");
const sheet = document.styleSheets[0]; // Get the first stylesheet
const rules = sheet.cssRules || sheet.rules;
const background_selectors_primary = ["body"];
const background_selectors_secondary = ["header, footer"];
const color_selectors_primary = ["h5", "h1", "a, p", ".images_grid"];
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}
else {
  applyTheme("light");
}



menu.addEventListener("click",() => {
  if (header.classList.contains("hidden")){
    header.classList.remove("hidden");
  }
  else{
    header.classList.add("hidden");
  }
});
byui.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "School"), "images/school.jpg")
});
email.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "email"), "images/email.jpg")
});
games.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "Games"), "images/games2.jpg")
});
ai.addEventListener("click",() => {
  create_Card(pages.filter(page => page.category == "AI"), "images/ai.jpg")
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
light_theme.addEventListener("click",() => {
  applyTheme("light");
});
dark_theme.addEventListener("click",() => {
    // Find and modify the specific rule
    applyTheme("dark");
  });

function applyTheme(theme){
  if (theme === "dark"){
    for (let rule of rules) {
      if (background_selectors_primary.includes(rule.selectorText)) {
            rule.style.backgroundColor = "var(--text_primary_elements)"; // Change background color
        }
        if (background_selectors_secondary.includes(rule.selectorText)) {
          rule.style.backgroundColor = "var(--secondary_text_dividers)"; // Change background color
        }
        if (color_selectors_primary.includes(rule.selectorText)) {
          rule.style.Color = "var(--backgrounds)"; // Change background color
        }
    }
  }
  else {
    for (let rule of rules) {
      if (background_selectors_primary.includes(rule.selectorText)) {
          rule.style.backgroundColor = "var(--backgrounds)"; // Change background color
      }
      if (background_selectors_secondary.includes(rule.selectorText)) {
        rule.style.backgroundColor = "var(--subte_backgrounds)"; // Change background color
      }
      if (color_selectors_primary.includes(rule.selectorText)) {
        rule.style.Color = "var(--text_primary_elements)"; // Change background color
      }
    }    
  }
  localStorage.setItem("theme", theme);
}


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

