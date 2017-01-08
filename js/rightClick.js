
document.addEventListener('contextmenu', (event) =>{
  event.preventDefault();
  window.location.href = "https://www.pinterest.com/";
});

document.addEventListener('click', (event) =>{
  event.preventDefault();
  // alert("NOPE");
  // rightClick();
  window.location.href = "http://www.google.com";


});


// function rightClick(){
//   document.body.onclick = function (e) {
//     var isRightMB;
//     e = e || window.event;

//     if ("which" in e){  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
//         isRightMB = e.which == 2; 
//     } 

//   };
// }
