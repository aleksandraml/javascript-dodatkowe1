let paragraph = document.getElementById('opis');

let mybutton = document.querySelector('button');

mybutton.onclick = function() {
paragraph.textContent = 'Przykładowy tekst';
}