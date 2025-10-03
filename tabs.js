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
    }

    // show tab content
    document.getElementById(tabName).style.display = "block";

    // add color to the button 
    element.style.backgroundColor = 'grey';
}

document.getElementById("defaultOpen").click();