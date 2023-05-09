const boxes = document.getElementById('cls-7');
const rect_data = document.getElementsByClassName('rectangle');

boxes.addEventListener("click", dataDisplay);

const zipId = 10012;

function dataDisplay () {
  console.log("bhai chal gaya");
  console.log(rect_data);

 if  (rect_data[0].style.display == "none") {
  rect_data[0].style.display = "block";
 } else {
  rect_data[0].style.display = "none";
 }


 console.log(zipId);

 var addresses = [];

fetch("https://raw.githubusercontent.com/Samarthbhatia33/final_manhattan/main/edit.json")
 .then((response) => response.json()) 
 .then((data) => {
   
   
   for(let i = 0; i < data.length; i ++){
    if (data[i].ZIP_CODE === zipId) {
      addresses.push(data[i].INCIDENT_ADDRESS);
      console.log(addresses);

    }
 }
});

}
