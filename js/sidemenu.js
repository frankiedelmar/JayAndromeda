
/* ------- SIDE MENU ------ */

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var about = document.getElementById("about");
var skills = document.getElementById("skills");
var contact = document.getElementById("contact");

about.style.display = "block";
skills.style.display = "none";
contact.style.display = "none";

function showAbout() {
	if (about.style.display === "none") {
    about.style.display = "block";
	skills.style.display = "none";
	contact.style.display = "none";
  } else {
    about.style.display = "none";
  }
}

function showSkills() {
	if (skills.style.display === "none") {
    skills.style.display = "block";
	about.style.display = "none";
	contact.style.display = "none";
  } else {
    skills.style.display = "none";
  }
}

function showContact() {
	if (contact.style.display === "none") {
    contact.style.display = "block";
	about.style.display = "none";
	skills.style.display = "none";
  } else {
    contact.style.display = "none";
  }
}