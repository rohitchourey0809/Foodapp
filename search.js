import navbar from "./components/navbar.js";

let nav_container = document.getElementById("nav-container");
nav_container.innerHTML = navbar();

document.getElementById("text").addEventListener("input", function () {
  debounce(main, 1000);
});

async function getData() {
  try {
    let name = document.getElementById("text").value;
    //  console.log(name)
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    let data = await res.json();
    //   console.log(data)
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}
getData();

async function main() {
  let data = await getData();
  if (data == undefined) {
    return;
  }
  append(data);
}

function append(data) {
  document.getElementById("search-items").textContent = "";

  data.map((e) => {
    let div = document.createElement("div");
    div.setAttribute("id", "div");

    let name = document.createElement("h3");
    name.textContent = e.strMeal;

    let image = document.createElement("img");
    image.src = e.strMealThumb;
    image.setAttribute("id", "img");

    div.append(image, name);

    document.getElementById("search-items").append(div);
  });
}

let timer;
function debounce(func, delay) {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    let name = document.getElementById("text").value;
    if (name == "") {
      document.getElementById("search-items").textContent = "";
    } else {
      func();
    }
  }, delay);
}
