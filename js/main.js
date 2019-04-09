function unfade(element) {
  var op = 0.1; // initial opacity
  element.style.opacity = op;
  element.style.display = "flex";
  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 20);
}

function openTab(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav__item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  unfade(document.getElementById(tab));
  evt.currentTarget.className += " active";
}
