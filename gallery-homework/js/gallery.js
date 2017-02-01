//global Variable
var imgBox = document.getElementById("image");
console.log(imgBox);

function upDate(previewPic) {
	/*var imgBox = document.getElementById("image");*/
  imgBox.style.backgroundImage = "url('" + previewPic.src + "')"
  imgBox.innerHTML = previewPic.alt;
}

function unDo() {
  imgBox.innerHTML = "Hover over an image below to display here.";
  imgBox.style.backgroundImage = "url('')"
}