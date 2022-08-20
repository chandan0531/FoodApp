import navbar from "../components/navbar.js"

document.querySelector("#navbar").innerHTML =navbar();

let logData =JSON.parse(localStorage.getItem("data"));
console.log(logData);

let name =document.createElement("h2")
name.textContent=`Name:${logData.name}`;

let email =document.createElement("p")
email.textContent=`Email:${logData.email}`;

document.querySelector("#loginSec").append(name,email)

document.querySelector("#logSec").textContent=logData.name;

// let searchValue =document.querySelector("#search").value;
// console.log(searchValue,"no");

// let getData = async () =>{
//     try{
//         let res = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=35f6f6d2bcab96e077dfc8302b2ea506&language=en-US&page=1");

//         let data = await res.json();
//         append(data.results)
//         console.log(data);
//     } catch(err){
//         console.log(err);
//     }
// }

// getData();

// function append(data){
//     let container =document.querySelector("#container");
//     data.map(function(ele){
//         let p =document.createElement("p");
//         p.innerText=ele.original_title;

//         container.append(p);
//     })
// }

// // let url="https://fakestoreapi.com/products/category/jewelery";

// document.querySelector("#search").addEventListener("input",searchFun);

// function searchFun(){
//     let searchValue =document.querySelector("#search").value;
//     console.log(searchValue,"no");
//     console.log("in the");
// }

// import { getData ,append } from "./fetch.js";


// let searchR =(ele) =>{
//     if(ele.key ==="Enter"){
//         let value =document.querySelector("#query").value;
//         let container =document.querySelector("#container");

//         container.innerHTML =null;
//         getData(value).then((data) =>{
//             console.log(data);
//             append(data.meals,container)
//         })
//     }
// }

// document.querySelector("#query").addEventListener("keydown",searchR)
