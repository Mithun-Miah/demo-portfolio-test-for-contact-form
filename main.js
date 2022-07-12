// Contact Form Code
// Google Sheet Connection to ahmadnesar898@gmail.com to get data from user contact form
// কন্টাক্ট ফর্মের ডাটা পাওয়া জন্য ahmadnesar898@gmail.com এই ইমেলের গুগোল সীট কানেশন করা হয়েছে
// Google Sheet Name: google-sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyIhguxxPVhGKY8oOVjJ0374c0eAfbJgZlZQ3fQWWGjWhlksLPVN1hz8Lg7at9JxtMb/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })

  
// Nav Menu Hide and Show code
function myFunction() {
  let menuItems = document.getElementById("menu");
    if (menuItems.style.display === "none") {
      menuItems.style.display = "block";
      } else {
        menuItems.style.display = "none";
      }
}

// About Section title Wrap every letter in a span for animation
var textWrapper = document.querySelector('.myDesignationTitle .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.myDesignationTitle .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.myDesignationTitle',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Skills Section title Wrap every letter in a span for animation
var textWrapper = document.querySelector('.mySkills');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.mySkills .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.mySkills',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });

// Skills Section sub title Wrap every letter in a span for animation
var textWrapper = document.querySelector('.mySkillsItems .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.mySkillsItems .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.mySkillsItems',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Team Section Read More Clickable Button

let readMore1 = document.querySelector('#readMoreWd');

readMore1.addEventListener('click', () => {
  window.open('webDesigner.html');
})

