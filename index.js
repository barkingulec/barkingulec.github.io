{
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
      } else {
        nav.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });
  }

var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;
var slides = document.getElementById('parent').children;
var curIndex = document.getElementById('cur-index');


function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-388px) rotateY(' + angle + 'deg)';
  curIndex.innerText = (selectedIndex % 9) + 1;
  if (selectedIndex % 9 === 0) { carousel.style.transform = 'translateZ(-686px)'; }
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  if (selectedIndex === -1) {selectedIndex = 8}
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  if (selectedIndex === 9) {selectedIndex = 0}
  rotateCarousel();
});




var carousel2 = document.querySelector('.carousel2');
var cellCount2 = 9;
var selectedIndex2 = 0;
var slides2 = document.getElementById('parent2').children;
var curIndex2 = document.getElementById('cur-index2');


function updateText() {
  curIndex2.innerText = selectedIndex2 + 1;
  if (selectedIndex2 === 0) {prevButton2.style.transform = "rotateY(90deg)"}
  else {prevButton2.style.transform = "rotateY(0deg)";}
  if (selectedIndex2 === 8) {nextButton2.style.transform = "rotateY(90deg)"}
  else {nextButton2.style.transform = "rotateY(0deg)";}
}

var prevButton2 = document.querySelector('.previous-button2');
prevButton2.addEventListener( 'click', function() {
  if (selectedIndex2 > 0) {
    slides2.item(selectedIndex2).style.transform = 'translateX(400px) translateZ(200px)';
    slides2.item(selectedIndex2-1).style.transform = 'translateX(0px) translateZ(700px)';
    selectedIndex2--;
    updateText();
  }
});

var nextButton2 = document.querySelector('.next-button2');
nextButton2.addEventListener( 'click', function() {
  if (selectedIndex2 < 8) {
    slides2.item(selectedIndex2).style.transform = 'translateX(-400px) translateZ(200px)';
    slides2.item(selectedIndex2+1).style.transform = 'translateX(0px) translateZ(700px)';
    selectedIndex2++;
    updateText();
  }
});

var showButton = document.getElementById('show-button');
var hideButton = document.getElementById('hide-button');
var beforeDiv = document.getElementById('single-project-before');
var afterDiv = document.getElementById('single-project-after');
showButton.addEventListener( 'click', function() {
  beforeDiv.classList.add("none");
  afterDiv.classList.remove("none");
});
hideButton.addEventListener( 'click', function() {
  beforeDiv.classList.remove("none");
  afterDiv.classList.add("none");
});

var showButton2 = document.getElementById('show-button-2');
var hideButton2 = document.getElementById('hide-button-2');
var beforeDiv2 = document.getElementById('single-project-before-2');
var afterDiv2 = document.getElementById('single-project-after-2');
showButton2.addEventListener( 'click', function() {
  beforeDiv2.classList.add("none");
  afterDiv2.classList.remove("none");
});
hideButton2.addEventListener( 'click', function() {
  beforeDiv2.classList.remove("none");
  afterDiv2.classList.add("none");
});