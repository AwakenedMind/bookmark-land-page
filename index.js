const toggle = (evt, feature) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(feature).style.display = "grid";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

const dropdown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("hamburger-icon").classList.toggle("hide");
  document.getElementById("close-icon").classList.toggle("show");

  document.getElementById("logo").classList.toggle("hide");

}