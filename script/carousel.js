// CAROUSEL SLIDER

var count = 0;
var i = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
if (screen.width > 990) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
    margin = itemDisplay * 5;
}
if (screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
    margin = itemDisplay * 6.8;
}
if (screen.width > 280 && screen.width < 700) {
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
    margin = itemDisplay * 20;
}


var items = document.getElementsByClassName("post");
var nextBtn = document.getElementsByClassName("next");
var itemleft = items.length % itemDisplay;
var itemslide = Math.floor(items.length / itemDisplay) - 1;
for (let i = 0; i < items.length; i++) {
    items[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

function next() {
    if (i !== (items.length/3)-1) {
        if (i == itemslide) {
            i = i + itemleft;
            count = count - (screen.width / itemDisplay) * itemleft;
        }
        else {
            i++;
            count = count - screen.width;
        }
    }
    slider.style.left = count + "px";
}

function prev() {
    if (i !== 0) {
        if (i == itemleft) {
            i = i - itemleft;
            count = count + (screen.width / itemDisplay) * itemleft;
        }
        
        else {
            i--;
            count = count + screen.width;
        }
    }
    console.log(i)
    slider.style.left = count + "px";
}

