function openLabel(evt, labelName) {

    // Declare all variables
    var i, tabcontent, tablinks;
  
    // remove all active class
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // add active class to show current tab
    document.getElementById(labelName).classList.add("active");
    evt.currentTarget.className += " active";
  }