// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

let getData = async (value) =>{
    try{
        let res =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)

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

export {getData, append};