window.onload = function () {
  setInterval("toggleSound()", 10);
}

function toggleSound() {
  var music = document.getElementById("vd");//获取ID  

  if (music.paused) { //判读是否播放  
    music.paused = false;
    music.play(); //没有就播放 
  }
}
document.getElementById("loading").addEventListener("click", function () {
  this.classList.add("hidden");
});