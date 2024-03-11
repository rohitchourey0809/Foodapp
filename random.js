import navbar from "./components/navbar.js";

let nav_container = document.getElementById("nav-container");
nav_container.innerHTML = navbar();

async function getdata() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let data = await res.json();

    console.log(data.categories);

    append(data.categories);
  } catch (error) {
    console.log(error);
  }
}
getdata();

function append(data) {
  data.map((e) => {
    let div = document.createElement("div");
    div.setAttribute("id", "singleDish");

    let name = document.createElement("h3");
    name.textContent = e.strCategory;

    let image = document.createElement("img");
    image.src = e.strCategoryThumb;
    image.setAttribute("id", "img");

    let discription = document.createElement("p");
    discription.textContent = e.strCategoryDescription;
    let div2 = document.createElement("div");
    div2.setAttribute("id", "dis");
    div2.append(discription);
    div.append(name, image, div2);

    document.getElementById("random-container").append(div);
  });
}
