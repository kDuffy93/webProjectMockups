let slider = document.getElementById("slider");
let unitNumber = document.getElementById("noUnits");
let avgRent = document.getElementById("avgRent");
let input = document.querySelector("#slider>input")
input.checked = false;


slider.addEventListener("click", () => {
    console.log(slider.firstChild);
    if(input.checked == true){
        unitNumber.style.color = "#ccc"; 
        avgRent.style.color = "#2196F3";
    }
    if(input.checked == false){
       

        unitNumber.style.color = "lightgreen";
        avgRent.style.color = "#ccc";
    }
})