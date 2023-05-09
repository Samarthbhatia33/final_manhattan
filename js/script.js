const boxes34 = document.getElementById('10034');
const boxes40 = document.getElementById('10040');
const boxes33 = document.getElementById('10033');
const boxes32 = document.getElementById('10032');
const boxes31 = document.getElementById('10031');
const boxes27 = document.getElementById('10027');
const boxes26 = document.getElementById('10026');
const boxes25 = document.getElementById('10025');
const boxes24 = document.getElementById('10024');
const boxes23 = document.getElementById('10023');
const boxes19 = document.getElementById('10019');
const boxes36 = document.getElementById('10036');
const boxes18 = document.getElementById('10018');
const boxes01 = document.getElementById('10001');
const boxes11 = document.getElementById('10011');
const boxes12 = document.getElementById('10012');
const boxes13 = document.getElementById('10013');
const boxes14 = document.getElementById('10014');
const boxes04 = document.getElementById('10004');
const boxes05 = document.getElementById('10005');
const boxes06 = document.getElementById('10006');
const boxes07 = document.getElementById('10007');
const boxes38 = document.getElementById('10038');
const boxes02 = document.getElementById('10002');
const boxes09 = document.getElementById('10009');
const boxes10 = document.getElementById('10010');
const boxes16 = document.getElementById('10016');
const boxes17 = document.getElementById('10017');
const boxes22 = document.getElementById('10022');
const boxes28 = document.getElementById('10028');
const boxes29 = document.getElementById('10029');
const boxes128 = document.getElementById('10128');
const boxes35 = document.getElementById('10035');
const boxes39 = document.getElementById('10039');


const rect_data = document.getElementsByClassName('rectangle');
const print_data = document.getElementsByClassName('data_print');
const container = print_data[0];

boxes34.addEventListener("click", d10034);
boxes40.addEventListener("click", d10040);
boxes33.addEventListener("click", d10033);
boxes32.addEventListener("click", d10032);
boxes31.addEventListener("click", d10031);
boxes27.addEventListener("click", d10027);
boxes26.addEventListener("click", d10026);
boxes25.addEventListener("click", d10025);
boxes24.addEventListener("click", d10024);
boxes23.addEventListener("click", d10023);
boxes19.addEventListener("click", d10019);
boxes36.addEventListener("click", d10036);
boxes18.addEventListener("click", d10018);
boxes01.addEventListener("click", d10001);
boxes11.addEventListener("click", d10011);
boxes12.addEventListener("click", d10012);
boxes13.addEventListener("click", d10013);
boxes14.addEventListener("click", d10014);
boxes04.addEventListener("click", d10004);
boxes05.addEventListener("click", d10005);
boxes06.addEventListener("click", d10006);
boxes07.addEventListener("click", d10007);
boxes38.addEventListener("click", d10038);
boxes02.addEventListener("click", d10002);
boxes09.addEventListener("click", d10009);
boxes10.addEventListener("click", d10010);
boxes16.addEventListener("click", d10016);
boxes17.addEventListener("click", d10017);
boxes22.addEventListener("click", d10022);
boxes28.addEventListener("click", d10028);
boxes29.addEventListener("click", d10029);
boxes128.addEventListener("click", d10128);
boxes35.addEventListener("click", d10035);
boxes39.addEventListener("click", d10039);

var zipId;


function deleteData() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function dataDisplay (zipId) {
 /* console.log("bhai chal gaya");
  console.log(rect_data); */

 if  (rect_data[0].style.display == "none") {
  rect_data[0].style.display = "block";
 } else {
  rect_data[0].style.display = "none";
 }

 /* console.log(zipId); */

fetch("https://raw.githubusercontent.com/Samarthbhatia33/final_manhattan/main/edit.json")
 .then((response) => response.json()) 
 .then((data) => {

   deleteData();
   
   for(let i = 0; i < data.length; i ++){
    if (data[i].ZIP_CODE === zipId) {

      console.log("111");

    let inci_addy = data[i].INCIDENT_ADDRESS;
    let pols  = data[i].POLICE_PRECINCT;
    let distr = data[i].CITY_COUNCIL_DISTRICT;
    let created_date = data[i].CREATED_DATE;
    let zippy = data[i].ZIP_CODE;
    console.log(inci_addy, pols, distr, created_date, zippy);

      const inciAddyPara = document.createElement("pp");
        inciAddyPara.textContent = "Incident Address: " + inci_addy;

        const zippyPara = document.createElement("pp");
        zippyPara.textContent = "Zip: " + zippy;  

      const polsPara = document.createElement("pp");
        polsPara.textContent = "Police Precinct: " + pols;

      const distrPara = document.createElement("pp");
        distrPara.textContent = "District: " + distr; 

      const datePara = document.createElement("pp");
        datePara.textContent = "Date: " + created_date;   

        const div = document.createElement("pp_main");
        div.appendChild(inciAddyPara);
        div.appendChild(zippyPara);
        div.appendChild(polsPara);
        div.appendChild(distrPara);
        div.appendChild(datePara);
        container.appendChild(div);
    }
 }
});

}

function d10034 () {
  zipId = 10034;
  dataDisplay(zipId);
  console.log("10034");
}

function d10040 () {
  zipId = 10040;
  dataDisplay(zipId);
  console.log("10040");
}

function d10033 () {
  zipId = 10033;
  dataDisplay(zipId);
  console.log("10033");
}

function d10032 () {
  zipId = 10032;
  dataDisplay(zipId);
  console.log("10032");
}

function d10031 () {
  zipId = 10031;
  dataDisplay(zipId);
  console.log("10031");
}

function d10027 () {
  zipId = 10027;
  dataDisplay(zipId);
  console.log("10027");
}

function d10026 () {
  zipId = 10026;
  dataDisplay(zipId);
  console.log("10026");
}

function d10025 () {
  zipId = 10025;
  dataDisplay(zipId);
  console.log("10025");
}

function d10024 () {
  zipId = 10024;
  dataDisplay(zipId);
  console.log("10024");
}

function d10023 () {
  zipId = 10023;
  dataDisplay(zipId);
  console.log("10023");
}

function d10019 () {
  zipId = 10019;
  dataDisplay(zipId);
  console.log("10019");
}

function d10036 () {
  zipId = 10036;
  dataDisplay(zipId);
  console.log("10036");
}

function d10018 () {
  zipId = 10018;
  dataDisplay(zipId);
  console.log("10018");
}

function d10001 () {
  zipId = 10001;
  dataDisplay(zipId);
  console.log("10001");
}

function d10011 () {
  zipId = 10011;
  dataDisplay(zipId);
  console.log("10011");
}

function d10012 () {
  zipId = 10012;
  dataDisplay(zipId);
  console.log("10012");
}

function d10013 () {
  zipId = 10013;
  dataDisplay(zipId);
  console.log("10013");
}

function d10014 () {
  zipId = 10014;
  dataDisplay(zipId);
  console.log("10014");
}

function d10004 () {
  zipId = 10004;
  dataDisplay(zipId);
  console.log("10004");
}

function d10005 () {
  zipId = 10005;
  dataDisplay(zipId);
  console.log("10005");
}

function d10006 () {
  zipId = 10006;
  dataDisplay(zipId);
  console.log("10006");
}

function d10038 () {
  zipId = 10038;
  dataDisplay(zipId);
  console.log("10038");
}

function d10007 () {
  zipId = 10007;
  dataDisplay(zipId);
  console.log("10007");
}

function d10002 () {
  zipId = 10002;
  dataDisplay(zipId);
  console.log("10002");
}

function d10003 () {
  zipId = 10003;
  dataDisplay(zipId);
  console.log("10003");
}

function d10009 () {
  zipId = 10009;
  dataDisplay(zipId);
  console.log("10009");
}

function d10010 () {
  zipId = 10010;
  dataDisplay(zipId);
  console.log("10010");
}

function d10016 () {
  zipId = 10016;
  dataDisplay(zipId);
  console.log("10016");
}

function d10017 () {
  zipId = 10017;
  dataDisplay(zipId);
  console.log("10017");
}

function d10022 () {
  zipId = 10022;
  dataDisplay(zipId);
  console.log("10022");
}

function d10021 () {
  zipId = 10021;
  dataDisplay(zipId);
  console.log("10021");
}

function d10028 () {
  zipId = 10028;
  dataDisplay(zipId);
  console.log("10028");
}

function d10029 () {
  zipId = 10029;
  dataDisplay(zipId);
  console.log("10029");
}

function d10128 () {
  zipId = 10128;
  dataDisplay(zipId);
  console.log("10128");
}

function d10035 () {
  zipId = 10035;
  dataDisplay(zipId);
  console.log("10035");
}

function d10039 () {
  zipId = 10039;
  dataDisplay(zipId);
  console.log("10039");
}




