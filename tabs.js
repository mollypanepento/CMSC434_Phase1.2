function openTab(tabName, element){
  // hides elements with class = tabcontent by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i=0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none";
  }

  // remove background color of all tabs
  tablinks = document.getElementsByClassName("tablink");
  for(i=0; i<tablinks.length; i++){
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "";
  }

  // show tab content
  document.getElementById(tabName).style.display = "block";

  // add color to the button 
  element.style.backgroundColor = 'grey';
  element.style.color = 'white';
}

document.getElementById("defaultOpen").click();

// --- Tab 4: Profile modal wiring ---
const profileImg = document.getElementById('profileImg');
const profileModal = document.getElementById('profileModal');
const profileClose = document.getElementById('profileClose');

if (profileImg && profileModal && profileClose) {
profileImg.addEventListener('click', () => {
  profileModal.style.display = 'flex';       // show modal
  profileModal.setAttribute('aria-hidden', 'false');
});

profileClose.addEventListener('click', () => {
  profileModal.style.display = 'none';       // hide modal
  profileModal.setAttribute('aria-hidden', 'true');
});

// click outside the card to close
profileModal.addEventListener('click', (e) => {
  if (e.target === profileModal) {
    profileModal.style.display = 'none';
    profileModal.setAttribute('aria-hidden', 'true');
  }
});

// optional: ESC to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && profileModal.style.display === 'flex') {
    profileModal.style.display = 'none';
    profileModal.setAttribute('aria-hidden', 'true');
  }
});
}





// --- Tab 6 ---
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}