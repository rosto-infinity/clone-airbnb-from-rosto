

const headerBottom = document.querySelector(".header-bottom");
console.log(headerBottom);  
window.addEventListener("scroll", () =>{
    console.log("window.scrollY");
    console.log(window.scrollY);

  if(window.scrollY> 80){
    // console.log("text");

    headerBottom.style.top = "70px";
    headerBottom.style.height= "87px;";
    headerBottom.style.boxShadow= "0px 3px 6px 0px rgba(0,0,0,0.1)";
    // headerBottom.style.background = "red";

  }else{
    headerBottom.style.top = "83px";
    headerBottom.style.boxShadow= "0px 3px 6px 0px rgba(0,0,0,0.0)";


  }

 });