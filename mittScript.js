const change = document.getElementById("change")
const logo = document.querySelector("h1")
let theme = "light"
 
let points2 = 0
let points1 = 0
let points3 = 0
 

if(change){
    change.addEventListener("click", function(){
    if(theme == "light"){
        document.getElementById("bg").style.backgroundColor = "#2b2b2b"
        logo.style.color = "#ffffff"
        theme = "dark"
    }
    else if(theme == "dark"){
         document.getElementById("bg").style.backgroundColor = "#ffffff"
        logo.style.color = "#000000"
        theme = "light"
    }
})
}
 

const points1span = document.getElementById("points1span")
const points2span = document.getElementById("points2span")
 const points3span = document.getElementById("points3span")
 
const plus1 = document.getElementById("plus1")
const plus2 = document.getElementById("plus2")
 
const minus1 = document.getElementById("minus1")
const minus2 = document.getElementById("minus2")
 



 
const plus3 = document.getElementById("plus3")




plus3.addEventListener("click", function() {
points1 = 0
points1span.textContent = points1
 
})



plus3.addEventListener("click", function() {
points2 = 0
points2span.textContent = points2 

})




plus1.addEventListener("click", function() {
points1 = points1+1
points1span.textContent = points1
 
})
 
minus1.addEventListener("click", function() {
points1 = points1-1
points1span.textContent = points1
 
})
 
 
plus2.addEventListener("click", function() {
points2 = points2+1
points2span.textContent = points2
 
})
 
minus2.addEventListener("click", function() {
points2 = points2-1
points2span.textContent = points2
 
})
 
 
 
