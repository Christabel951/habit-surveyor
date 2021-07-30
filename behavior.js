document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");
  //To alternate the size of the image, remove or add the class-small
  function switchBtnClasses() {
    if(thumbnailElement.classList.contains("small")){
      thumbnailElement.classList.remove("small");
    }
    else {
      thumbnailElement.classList.add('small');
    }
  }
  thumbnailElement.addEventListener("click", switchBtnClasses);

  

});