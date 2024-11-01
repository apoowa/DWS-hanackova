// ukol 1
let first = document.getElementById("first")
first.addEventListener("click", function(){
    alert("vyskocil alert")  
})
// ukol 2
let second = document.getElementById("second")
second.addEventListener("click", function(){
 second.textContent = ("jiny text");
})
 
//ukol 3
const button = document.getElementById('changeTextButton');
const text = document.getElementById('text');
button.addEventListener('click', function() {
    text.textContent = "text zmenen";
});
// ukol 4
var showHide = document.getElementById("showHide");
var demo = document.getElementById("demo");
showHide.onclick = function() {
  if (demo.style.display == "block") {
    demo.style.display = "none";
  } else {
    demo.style.display = "block";
  }
}
// ukol 5
function sayHello() {
    const name = document.getElementById('nameInput').value;
    if(name) {
        alert(`Ahoj, ${name}!`);
    } else {
        alert("Prosím, zadejte své jméno.");
    }
}



// ukol 6

