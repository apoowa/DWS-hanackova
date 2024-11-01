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

