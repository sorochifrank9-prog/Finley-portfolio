function book(service){
  let msg = "Hello 360 Flex Global, I want to book: " + service;
  window.open("https://wa.me/2349161971275?text=" + encodeURIComponent(msg), "_blank");
}
function sendBooking(){
  let name = document.getElementById("name").value;
  let style = document.getElementById("style").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  if(!name){ alert("Abeg put your name first"); return; }
  let msg = "Hello 360 Flex Global, I am " + name + ". I want to book " + style + " on " + date + " by " + time;
  window.open("https://wa.me/2349161971275?text=" + encodeURIComponent(msg), "_blank");
}