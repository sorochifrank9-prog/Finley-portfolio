let plansData = {
  MTN: [[ "500MB", 400, "1 Day" ], 
  [ "1GB", 550, "1 Day" ],
   [ "2GB", 800, "2 Days" ],
   [ "2.5GB", 750, "1 Day" ],
   [ "2.5GB", 900, "2 Days" ], 
   [ "3.2GB", 1050, "2 Days" ],
   [ "4GB", 1250, "2 Days" ],
    [ "5.5GB", 1550, "2 Days" ], 
    [ "7GB", 1850, "2 Days" ]],

  AIRTEL: [[ "500MB", 350, "2 Days" ],
   [ "1GB", 350, "social plans 3 Days" ],
    [ "1.5GB", 650, "2 Days" ],
     [ "2GB", 800, "2 Days" ], 
     [ "4GB", 1050, "2 Days" ], 
     [ "5GB", 1550, "2 Days" ]],

  GLO: [[ "500MB", 300, "1 Day" ], 
  [ "1GB", 400, "1 Day" ], 
  [ "1.5GB", 650, "2 Days" ], 
  [ "3.1GB", 1050, "2 Days" ], 
   [ "3GB", 1200, "3 Days" ],
  [ "5GB", 1800, "3 Days" ]],

  "9MOBILE": [[ "650MB", 550, "3 Days" ], 
  [ "2GB", 1100, "30 Days" ], 
  [ "2.3GB", 1250, "30 Days" ],
  [ "6.2GB", 3100, "30 days"],
  [ "4.5GB", 2100, "30 Days" ], 
  [ "5.2GB", 2600, "30 Days" ],
  [ "8.4GB", 4100, "30 days"],
  [ "11.4GB", 5100, "30 days"]],
};

let currentNet = "MTN";
let picked = "";
function render(){
  document.getElementById("netTitle").innerText = "📱 " + currentNet + " SME Data";
  let html = "";
  plansData[currentNet].forEach(p => {
    html += `<div class="plan-row"><span><b>${p[0]}</b> - ${p[2]}</span><b>₦${p[1].toLocaleString()}</b>
    <button onclick="pick('${currentNet} ${p[0]} - N${p[1]}')">Buy</button></div>`;
  });
  document.getElementById("plans").innerHTML = html;
}
function show(net, btn){
  currentNet = net;
  document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  render();
}
function pick(plan){
  picked = plan;
  document.getElementById("planPicked").value = plan;
  document.getElementById("buyerNum").focus();
}
function buyData(){
  let num = document.getElementById("buyerNum").value;
  if(!picked){ alert("Abeg pick one plan first"); return; }
  if(!num || num.length < 10){ alert("Abeg put correct phone number"); return; }
  let msg = "Hello Finley Data Hub, I want to buy " + picked + " for " + num + ". I go pay now.";
  window.open("https://wa.me/2349038001642?text=" + encodeURIComponent(msg), "_blank");
}
render();