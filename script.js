// style for background id
let navbar = document.getElementById("navbar").clientHeight;
let windowHeightSize = window.innerHeight;
document.getElementById("background").style.height = `${
  windowHeightSize - navbar
}px`;

// style for sections
let height = document.getElementById("portfolio").clientHeight;
document.getElementById("about").style.minHeightt = `${height}px`;
document.getElementById("contact").style.minHeight = `${height}px`;
