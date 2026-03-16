//console.log("window")

// const header= document.getElementById("header")
// console.log(header)
// header.style.color="blue"
// const classselector=document.getElementsByClassName("classselector")
// const arr =Array.from(classselector)
// console.log(classselector)
// arr.forEach((ele)=>{
//     ele.style.color="orange"
// })

// const h3=document.getElementsByTagName("h3")
// console.log(h3)
// const arrr =Array.from(h3)
// arrr.forEach((ele)=>{
//     ele.style.color="yellow"
//     ele.style.background="grey"
// })
// const classselector=document.querySelector(".classselector")
// console.log(classselector)
// classselector.style.color="green"
// const h3=document.querySelector("h3")
// console.log(h3)
// h3.style.color="green"
// const classselector=document.querySelectorAll(".classselector")
// console.log(classselector)
// classselector.forEach((ele)=>{
//     ele.style.color="orange"
// })
// const h3=document.querySelectorAll("h3")
// console.log(h3)
// h3.forEach((ele)=>{
//     ele.style.color="yellow"
// })
const header=document.querySelector("#header")
const main=document.getElementById("main")

header.textContent="hello mani!,is greeshma fine"
main.innerHTML="<p> mani... yeah good</p>"

const outer=document.getElementById("outer")
const inner=document.createElement("div")
inner.setAttribute("class","inner")
inner.innerHTML="<p> hello</p>"
outer.appendChild(inner)
