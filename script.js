function openPreview(src){

  const preview = document.getElementById("preview");
  const previewImg = document.getElementById("preview-img");

  preview.classList.add("active");

  previewImg.src = src;

}

function closePreview(){

  document.getElementById("preview")
  .classList.remove("active");

}