//alert('heyyy!!!');

var slider = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("imageslider");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slider++;
    if (slider > x.length) { slider = 1 }
    x[slider - 1].style.display = "block";
    setTimeout(slideshow, 2000); // Change image every 2 seconds
}