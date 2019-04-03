// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const saveLincoln = document.getElementById("save_lincoln");
const interval = parseInt(document.getElementbyId("interval")).value;
const  foreGround = document.getElementbyId("foreground")
let opacity = 1;


function fadeOut() {
  foreGround.style.opacity = opacity;
  opacity -=  0.3;
}


saveLincoln.addEventListener("click", function(e){
  console.log(e)
})
