import navbar from "../components/navbar.js"

document.querySelector("#navbar").innerHTML =navbar();

import { getData ,append } from "./fetch.js";

let id;


let searchR =(ele) =>{
    if(ele.key ==="Enter"){
        let value =document.querySelector("#query").value;
        let container =document.querySelector("#container");

        container.innerHTML =null;
        getData(value).then((data) =>{
            console.log(data);
            append(data.meals,container)
        })
    }
}

document.querySelector("#query").addEventListener("keydown",searchR);

document.querySelector("#query").addEventListener("input", InputSearch);

let delay = 3000;

function InputSearch() {
    let value = document.querySelector("#query").value;
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        console.log("time");
        let container =document.querySelector("#container");

        container.innerHTML =null;
        getData(value).then((data) =>{
            console.log(data);
            append(data.meals,container)
        })
    }, delay)



}