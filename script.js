var dayTime = false;
function switchTheme(){
  if (dayTime === true) {
    document.getElementById("themeStatus").innerHTML = "Night Theme - ON";
    header.style.backgroundColor = "#22262B";
    footer.style.backgroundColor = "#22262B";
    content.style.backgroundColor = "#292C34";
  } else {
    document.getElementById("themeStatus").innerHTML = "Night Theme - OFF";
    header.style.backgroundColor = "#5582AB";
    footer.style.backgroundColor = "#5582AB";
    content.style.backgroundColor = "#F5F6F7";
  }
  dayTime =!dayTime;
}
