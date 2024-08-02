import "./styles.css";
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Part 1
// 1. Select and cache the <main> element in a variable named mainEl
const mainEl = document.getElementsByTagName("main")[0];

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr");

//Part 2
// Select and cache the <nav> element in a variable named topMenuEl
const topMenuEl = document.getElementById("top-menu");

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100px"; // Assuming height should be 100px for better layout

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

//Part 3

//Part Three
// Iterate over the entire menuLinks array and for each "link" object:
for (const link of menuLinks) {
  // Create an <a> element.
  const a = document.createElement("a");
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.href = link.href;
  // Set the new element's content to the value of the text property of the "link" object.
  a.innerText = link.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(a);
}
