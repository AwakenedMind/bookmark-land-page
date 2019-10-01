var acc = document.getElementsByClassName("faq-acc-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function validateForm(e) {
  e.preventDefault()
  var x = document.forms["myForm"]["fname"].value;

  let error = "" || x.includes("@") || x.includes(".com")
  if (x == error) {
    alert("Name must be filled out");
    return false;
  }
}
