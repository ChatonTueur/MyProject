const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {

navbarLinks.classList.toggle('active')

})

function openPage(){
var a = document.getElementsById('search').value;

if (a === "chat"){
window.open("/" ,'_self');
}

if (a === "chien"){
window.open("/" ,'_self')

}
if (a === "lapin"){
window.open("/" ,'_self')

}
if (a === "tortue"){
window.open("/" ,'_self')

}

}

const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})


var modal = {
modalHolder: document.getElementById('modalHolder'),
box: document.createElement('div'),
boxPhoto: document.createElement('img'),
closeButton: document.createElement('span'),
openModal: function(source) {
  
  this.modalHolder.appendChild(this.box);
  this.box.appendChild(this.boxPhoto);
  this.box.appendChild(this.closeButton);
  
  this.closeButton.textContent = 'x';
  this.boxPhoto.src = source;
  
  this.box.className = 'modal';
  this.closeButton.className = 'closeButton';
  this.modalHolder.className = 'modalHolder';
  this.boxPhoto.className = 'boxPhoto';
  
  this.closeButton.addEventListener('click', handlers.close);
},
closeModal: function() {
  this.modalHolder.innerHTML = '';
  this.modalHolder.className = '';
}
  }
  
  var handlers = {
open: function(n) {
  var imageSource = document.getElementsByTagName('img')[n].src;
  modal.openModal(imageSource);
},
close: function() {
  modal.closeModal();
}
  }



  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  
  const optionsList = document.querySelectorAll(".option");
  
  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
  
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });


var ZBRangeSlider = function(id) { 
var self = this;
var startX = 0, x = 0;

var slider = document.getElementById(id)
var touchLeft  = slider.querySelector('.slider-touch-left');
var touchRight = slider.querySelector('.slider-touch-right');
var lineSpan   = slider.querySelector('.slider-line span');


var min   = parseFloat(slider.getAttribute('se-min'));
var max   = parseFloat(slider.getAttribute('se-max'));

var defaultMinValue = min;
if(slider.hasAttribute('se-min-value'))
{
  defaultMinValue = parseFloat(slider.getAttribute('se-min-value'));  
}
var defaultMaxValue = max;

if(slider.hasAttribute('se-max-value'))
{
  defaultMaxValue = parseFloat(slider.getAttribute('se-max-value'));  
}


if(defaultMinValue < min)
{
  defaultMinValue = min;
}

if(defaultMaxValue > max)
{
  defaultMaxValue = max;
}

if(defaultMinValue > defaultMaxValue)
{
  defaultMinValue = defaultMaxValue;
}

var step  = 0.0;

if (slider.getAttribute('se-step'))
{
  step  = Math.abs(parseFloat(slider.getAttribute('se-step')));
}
   
var normalizeFact = 26;

self.slider = slider;
self.reset = function() {
  touchLeft.style.left = '0px';
  touchRight.style.left = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
  lineSpan.style.marginLeft = '0px';
  lineSpan.style.width = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
  startX = 0;
  x = 0;
};

self.setMinValue = function(minValue)
{
  var ratio = ((minValue - min) / (max - min));
  touchLeft.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))) + 'px';
  lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
  lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
  slider.setAttribute('se-min-value', minValue);
}

self.setMaxValue = function(maxValue)
{
  var ratio = ((maxValue - min) / (max - min));
  touchRight.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) + normalizeFact) + 'px';
  lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
  lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
  slider.setAttribute('se-max-value', maxValue);
}

self.reset();

 
var maxX = slider.offsetWidth - touchRight.offsetWidth;
var selectedTouch = null;
var initialValue = (lineSpan.offsetWidth - normalizeFact);

self.setMinValue(defaultMinValue);
self.setMaxValue(defaultMaxValue);

function onStart(event) {
  
 
  event.preventDefault();
  var eventTouch = event;
  
  if (event.touches)
  {
eventTouch = event.touches[0];
  }
  
  if(this === touchLeft)
  {
x = touchLeft.offsetLeft;
  }
  else
  {
x = touchRight.offsetLeft;
  }
  
  startX = eventTouch.pageX - x;
  selectedTouch = this;
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onStop);
  document.addEventListener('touchmove', onMove);
  document.addEventListener('touchend', onStop);
  
  
}

function onMove(event) {
  var eventTouch = event;
  
  if (event.touches)
  {
eventTouch = event.touches[0];
  }
  
  x = eventTouch.pageX - startX;
  
  if (selectedTouch === touchLeft)
  {
if(x > (touchRight.offsetLeft - selectedTouch.offsetWidth + 10))
{
  x = (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)
}
else if(x < 0)
{
  x = 0;
}

selectedTouch.style.left = x + 'px';
  }
  else if (selectedTouch === touchRight)
  {
if(x < (touchLeft.offsetLeft + touchLeft.offsetWidth - 10))
{
  x = (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)
}
else if(x > maxX)
{
  x = maxX;
}
selectedTouch.style.left = x + 'px';
  }
  
  lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
  lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';

  calculateValue();

  if(slider.getAttribute('on-change'))
  {
var fn = new Function('min, max', slider.getAttribute('on-change'));
fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
  }
  
  if(self.onChange)
  {
self.onChange(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
  }
  
}

function onStop(event) {
  document.removeEventListener('mousemove', onMove);
  document.removeEventListener('mouseup', onStop);
  document.removeEventListener('touchmove', onMove);
  document.removeEventListener('touchend', onStop);
  
  selectedTouch = null;
  
  calculateValue()
   
  if(slider.getAttribute('did-changed'))
  {
var fn = new Function('min, max', slider.getAttribute('did-changed'));
fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
  }
  
  if(self.didChanged)
  {
self.didChanged(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
  }
}

function calculateValue() {
  var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue;
  var minValue = lineSpan.offsetLeft / initialValue;
  var maxValue = minValue + newValue;
  
  var minValue = minValue * (max - min) + min;
  var maxValue = maxValue * (max - min) + min;
  
  console.log(step);
  if (step !== 0.0)
  {
var multi = Math.floor((minValue / step));
minValue = step * multi;

multi = Math.floor((maxValue / step));
maxValue = step * multi;
  }
  
  slider.setAttribute('se-min-value', minValue);
  slider.setAttribute('se-max-value', maxValue);
}

touchLeft.addEventListener('mousedown', onStart);
touchRight.addEventListener('mousedown', onStart);
touchLeft.addEventListener('touchstart', onStart);
touchRight.addEventListener('touchstart', onStart);
  };
  
  var newRangeSlider = new ZBRangeSlider('my-slider');
  
  newRangeSlider.onChange = function(min, max)
  {
console.log(min, max, this);
document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
  }
  
  newRangeSlider.didChanged = function(min, max)
  {
console.log(min,max, this);
document.getElementById('result').innerHTML = 'Min: ' + min + ' Max: ' + max;
  }
 function validateEmail() {
    let emailTextBox = document.getElementById("email");
    let email = emailTextBox.value;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    emailTextBox.style.color = "white";
    if(emailRegex.test(email)) {
      emailTextBox.style.backgroundColor = "green";
    }
    else {
      emailTextBox.style.backgroundColor = "red";
    }
  }
  
  function validateFirstName(name) {
    let control = document.getElementById("first_name");
    control.style.color = "white";

    if(control.value == "") {
      control.style.background = "red";
    }
    else if(Number(control.value)) {
      control.style.background = "red";
    }
    else {
      control.style.background = "green";
    }
  }

 
 
  function validateLastName(name) {
    let control = document.getElementById("last_name");
    control.style.color = "white";

    if(control.value == "") {
      control.style.background = "red";
    }
    else if(Number(control.value)) {
      control.style.background = "red";
    }
    else {
      control.style.background = "green";
    }
  }

 function validatePhone() {

  let phoneNumber = document.getElementById("phone");
  let reg=  /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;
  
  phoneNumber.style.color = "white";
  if
  (phoneNumber.value == reg)
   {
    phoneNumber.style.background = "green";
  }
  else {
    phoneNumber.style.background = "red";
   
  }
}

 function myFunction() {
  alert("Nous vous remercions de l'intérêt porté à notre association, nous vous contacterons dans les plus brefs délais 😄 ");
}
  
