import navbar from "../components/navbar.js"

document.querySelector("#navbar").innerHTML =navbar();

let getData = async () =>{
    try{
        let res =await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

        let data =res.json();

        return data;
    }catch(err){
        console.log(err);
    }
}

let append = (data,container)=>{
    data.map(function(ele){
    let box =document.createElement("div");

    let image =document.createElement("img");
    image.src =ele.strMealThumb;

    let name = document.createElement("h3");
    name.textContent =ele.strMeal;

    let process = document.createElement("p");
    process.textContent =ele.strInstructions;

    box.append(image,name,process);

    container.append(box);
    })
}

let container =document.querySelector("#container");

        container.innerHTML =null;
        getData().then((data) =>{
            console.log(data);
            append(data.meals,container)
        })