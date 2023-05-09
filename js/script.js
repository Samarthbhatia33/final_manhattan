const boxes = document.getElementById('cls-7');
const rect_data = document.getElementsByClassName('rectangle');

fetch('./edit.json')

boxes.addEventListener("click", dataDisplay);



function dataDisplay () {
  console.log("bhai chal gaya");
  console.log(rect_data);

 if  (rect_data[0].style.display == "none") {
  rect_data[0].style.display = "block";
 } else {
  rect_data[0].style.display = "none";
 }
}
