
var truthBut = document.getElementById("truth")
truthBut.addEventListener("click", swap);
// Swap from my face to the other and back
function swap(){
    let myFace = document.getElementById("md");
    let faceStyles = window.getComputedStyle(myFace);
    let faceVis = faceStyles.getPropertyValue('visibility'); 

    let other = document.getElementById("blursed");
    let otherStyles = window.getComputedStyle(other);
    let otherVis = otherStyles.getPropertyValue('visibility');
    if (faceVis === "hidden"){
        myFace.style.visibility = "visible";
        other.style.visibility = "hidden";
        truthBut.innerHTML = "See the truth";
    }
    else if (otherVis === "hidden"){
        
        myFace.style.visibility = "hidden";
        other.style.visibility = "visible";
        truthBut.innerHTML = "Hide the truth";
    }
}

