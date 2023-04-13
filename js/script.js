function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

//initiate variable for image number
let intIndex = 0;

function showImage(i) {
// function showImage() {
    // intImage++;
    intIndex += i;

    let images = document.getElementsByClassName('image');
    let dots = document.getElementsByClassName('dot');

    for(k = 0; k<images.length; k++) {
        images[k].style.display = "none";
        dots[k].className = dots[k].className.replace("active", "");
    }
    //go back to first image if intIndex is 0
    if(intIndex > images.length - 1) {
        intIndex = 0
    }
    if(intIndex < 0) {
        intIndex = images.length-1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className += " active"

}


//MAIN PRG
window.onload = function() { //live when on page
    currentYear();
    showImage(intIndex);
}

// setInterval(() => {
//     showImage()
// }, 500);