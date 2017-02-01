/*Name this external file gallery.js*/

function upDate(previewPic){
  var theDiv=document.getElementById('image');
  theDiv.innerHTML=previewPic.alt;      
  theDiv.style.backgroundImage="url("+previewPic.src+")";

}

function unDo(){
    var theDivObject=document.getElementById('image');
    theDivObject.style.backgroundImage="";
    theDivObject.innerHTML="Hover over an image below to display here";
 
		
  }