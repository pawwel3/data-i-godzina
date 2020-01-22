/*const now = new Date();
//const element = document.querySelector('.element');
//element.innerText = 'Dzisiaj jest dzień tygodnia: ${now.getDay()}';
//document.getElementById("element").innerHTML='Dzisiaj jest dzień tygodnia: ${now.getDay()}';
const el = document.querySelector('.element');

const html = `
Jest teraz czas: ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} lt;br>
Dnia: ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}
`

el.innerText = html
function myFunction() {
    document.querySelector(".example").style.backgroundColor = "red";
  }*/
  function myFunction(){
  const now = new Date();
  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  var hours = now.getHours();
  if (hours<10) hours= "0"+hours;
  var minutes = now.getMinutes();
  if(minutes<10) minutes = "0"+minutes;
  var seconds = now.getSeconds();
  if (seconds<10) seconds = "0"+seconds;
  
  
  const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
  const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    document.querySelector(".example").innerHTML="Dzisiaj jest "+days[day]+
    " "+date+" "+months[month]+" "+year+"</br>"+"godzina "+hours+":"+minutes+":"+seconds;
    setTimeout("myFunction()",1000);
}
