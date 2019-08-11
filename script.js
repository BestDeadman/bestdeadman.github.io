var dayTime = false;
function switchTheme() {
  if (dayTime === true) {
    /* Включаем светлую тему*/
    header.style.backgroundColor = "#22262B";
    footer.style.backgroundColor = "#22262B";
    contentBlock.style.backgroundColor = "#292C34";
    contentBlock.style.color = "#F5F6F7";
  } else {
    /* Включаем темную тему*/
    header.style.backgroundColor = "#5582AB";
    footer.style.backgroundColor = "#5582AB";
    contentBlock.style.backgroundColor = "#F5F6F7";
    contentBlock.style.color = "#292C34";
  }
  dayTime =!dayTime;
}
