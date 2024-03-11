import navbar from "./components/navbar.js";

let nav_container = document.getElementById("nav-container");
nav_container.innerHTML = navbar();

import { getdata, appendata } from "./components/receipe.js";

let url = "https://www.themealdb.com/api/json/v1/1/random.php";

let data = await getdata(url);

console.log(data);

let parent = document.getElementById("receipeOfday");

appendata(data, parent);
