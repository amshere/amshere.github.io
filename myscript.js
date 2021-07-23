const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var contact = document.getElementById("contact");
var contacts = document.getElementById("contacts");

contact.addEventListener("click",changeColor, true);
contact.addEventListener("click",changeColor2, true);

contact.addEventListener("click",function(){contacts.style.background=""});

function changeColor(){
  contacts.background="#343434"
};
function changeColor2(){
  contacts.background="#343434"
};



