//ukol 1
let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("ahoj tady alert")
})
//ukol 2
const second = document.getElementById('second')

second.addEventListener('click', function(){
    second.textContent = "jiny text"
})
//ukol 3
const third = document.getElementById('third')

third.addEventListener('click', function(){
    var paragraph = document.getElementById("three");
    paragraph.textContent = "tady text";
})
//ukol 4
    
const fourth = document.getElementById('fourth')

fourth.addEventListener('click', function(){
    var paragraph = document.getElementById("four");
    paragraph.textContent = "text se objevil";
})
//ukol 5
function hellouser(){
    let user = document.getElementById('user').value;
    alert('vitej na webu ' + user)
}
//ukol 7
const seven = document.getElementById("seven")

seven.addEventListener("mouseover", () => {
  seven.textContent = "tu text"
})

seven.addEventListener("mouseout", () => {
  seven.textContent = "puvodni text text";
})
//ukol 8
const eithth = document.getElementById('eighth');
const eight = document.getElementById('eight');

eighth.addEventListener('click', () => {
  const now = new Date();
  const formattedTime = now.toLocaleString(); 
  eight.textContent = formattedTime;
})
//ukol 9
const tlacitko = document.getElementById("nineth");
const nine = document.getElementById("nine");

tlacitko.addEventListener("click", () => {
  const dnes = new Date();
  const formatovanyDatum = dnes.toLocaleDateString();
  nine.textContent = formatovanyDatum;
})