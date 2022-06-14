var i =  0;			// Start Point
var images = [];

images[0] = "images/food.jpg";
images[1] = "images/shoe.png";
images[2] = "images/food3.jpg";

let inc=document.querySelector("#next")

next.addEventListener("click",function go(){
    document.slide.src = images[i];
    i++
   // document.getElementById("display")
    //console.log(counter);
    //document.querySelector("#display").innerHTML=images;
})

let previous=document.querySelector("#previous")

previous.addEventListener("click",function back(){
    document.slide.src = images[i];
    i--
   // document.getElementById("display")
    //console.log(counter);
    //document.querySelector("#display").innerHTML=images;
})