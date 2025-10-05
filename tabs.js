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