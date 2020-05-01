function vaiKenzie() {
  var elem = document.getElementById("logotipo");   
  var pos = 500;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 1255) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.right = pos + "px"; 
    }
  }
}