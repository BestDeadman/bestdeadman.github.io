jQuery(document).ready(function(){
  //var newPost = $("<div></div>");
  //$("#contentBlock").prepend("#newPost");
});

var dayTime = false;
function switchTheme() {
  if (dayTime === true) {
    // Включаем светлую тему
    contentBlock.style.backgroundColor = "#292C34";
    contentBlock.style.color = "#F5F6F7";
  } else {
    // Включаем темную тему*/
    contentBlock.style.backgroundColor = "#F5F6F7";
    contentBlock.style.color = "#292C34";
  }
  dayTime =!dayTime;
}
