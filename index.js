// let prePosition=0;
// window.onscroll=(e)=>{
// let actualPosition=window.pageYOffset;
// if(prePosition>actualPosition){
//     document.querySelector(".header-1").style.transform="translateY(0px)"
//     document.querySelector(".header-2").style.transform="translateY(0px)";
//     prePosition=actualPosition;
// }
// else{
//     document.querySelector(".header-1").style.transform="translateY(-100px)";
//     document.querySelector(".header-2").style.transform="translateY(-100px)";
//     prePosition=actualPosition;
// }
// }
let handBar=document.querySelector(".hand-bar");
let nav=document.querySelector("nav");
handBar.addEventListener("click",(e)=>{
    console.log("kani");
nav.classList.toggle("active")
}
)

