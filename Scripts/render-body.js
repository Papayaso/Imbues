document.addEventListener("DOMContentLoaded",function(){
  var allText = $.getJSON("/Home/Index.cshtml");
  document.getElementById("body").innerHTML = allText;
});