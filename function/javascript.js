
var truthBut = document.getElementById("truth")
truthBut.addEventListener("click", swap);
// Swap from my face to the other and back
function swap(){
    let myFace = document.getElementById("md");
    let faceStyles = window.getComputedStyle(myFace);
    let faceVis = faceStyles.getPropertyValue('display'); 

    let other = document.getElementById("blursed");
    let otherStyles = window.getComputedStyle(other);
    let otherVis = otherStyles.getPropertyValue('display');
    //alert(faceVis);
    //alert(otherVis);
    if (faceVis === "none"){
        myFace.style.display = "inline";
        other.style.display = "none";
        truthBut.innerHTML = "See the truth";
    }
    else if (otherVis === "none"){
        
        myFace.style.display = "none";
        other.style.display = "inline";
        truthBut.innerHTML = "Hide the truth";
    }
}

