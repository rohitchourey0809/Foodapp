async function getdata(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();

    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

function appendata(data, parent) {
  data.map((e) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = e.strMealThumb;
    image.setAttribute("id", "img");

    let name = document.createElement("h3");
    name.textContent = e.strMeal;

    let ul = document.createElement("ul");
    ul.setAttribute("id", "ingre");

    let li1 = document.createElement("li");
    li1.textContent = e.strIngredient1;

    let li2 = document.createElement("li");
    li2.textContent = e.strIngredient2;

    let li3 = document.createElement("li");
    li3.textContent = e.strIngredient3;

    let li4 = document.createElement("li");
    li4.textContent = e.strIngredient4;

    let li5 = document.createElement("li");
    li5.textContent = e.strIngredient5;

    let li6 = document.createElement("li");
    li6.textContent = e.strIngredient6;

    let ingredians = document.createElement("h3");
    ingredians.textContent = "Ingrediants";

    //     let ingr1 = document.createElement("p")
    //     ingr1=  `ingrediant1:-${e.strIngredient1}`
    //  //    ingr1.setAttribute("class","class1")

    //     let receipe = document.createElement("h3")
    //     receipe.textContent="Steps To Follow"

    //     let ingr2 = document.createElement("h4")
    //     ingr2=`ingrediant2:-${e.strIngredient2}`
    //  //    ingr2.setAttribute("class","class1")

    //     let ingr3 = document.createElement("h4")
    //     ingr3=`ingrediant3:-${e.strIngredient3}`
    //  //    ingr3.setAttribute("class","class1")

    //     let ingr4 = document.createElement("h4")
    //     ingr4=`ingrediant4:-${e.strIngredient4}`
    //  //    ingr4.setAttribute("class","class1")

    //     let ingr5 = document.createElement("h4")
    //     ingr5=`ingrediant5:-${e.strIngredient5}`
    //  //    ingr5.setAttribute("class","class1")

    //     let ingr6 = document.createElement("h4")
    //     ingr6=`ingrediant6:-${e.strIngredient6}`
    //  //    ingr6.setAttribute("class","class1")

    //     div2.append(ingr1,ingr2,ingr3,ingr4,ingr5,ingr6)

    ul.append(li1, li2, li3, li4, li5, li6);

    let instruction_div = document.createElement("div");

    let instruction = document.createElement("p");
    instruction.textContent = e.strInstructions;
    instruction_div.setAttribute("id", "instruction");

    instruction_div.append(instruction);

    div.append(name, image, ingredians, ul, instruction_div);

    parent.append(div);
  });
}

export { getdata, appendata };
