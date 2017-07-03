var $ = require('jquery');
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
if (canvas.getContext('2D' != null)) {
  var context = canvas.getContext('2d');
}else {
  var context;
};

module.exports = function() {

  function saveImage(){
    $("#avatar").trigger("click");
  }



if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
  video.src = window.URL.createObjectURL(stream);
  video.play();
  });
}


function download(){
  context.drawImage(video, 0, 0, 300, 300);
  var download = document.getElementById("download");
  var image = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
  setTimeout(saveImage,1000)
}




}
