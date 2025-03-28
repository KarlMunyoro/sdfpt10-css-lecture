// 1. querySelector - select the first h1 and change its text and color
// 2. querySelectorAll - select all the li and give the text color red
// 3. getElementsByTagName - select the th and increase their font size
// 4. getElementsByClassName - select the element with the class of image-container/ change the backgroundColor
// 5. getElementById - select the course outcomes and change the BG color

const heading=document.querySelector("h1");
heading.textContent="BOOM";
heading.style.color="red";

const listItems=document.querySelectorAll("li");
listItems.forEach(element => {
    element.style.color="red";
});

const tableheaders=document.getElementsByTagName("th")
for(let x=0; x<tableheaders.length; x++){
    tableheaders[x].style.fontSize="20px";
}

const imageContainer = document.getElementsByClassName('image-container')[0];
imageContainer.style.backgroundColor = 'lightblue'; 

const courseoutcome=document.getElementById("course-outcomes")
courseoutcome.style.color="gold";

let newrow=document.createElement("tr");
let tablebody=document.querySelector("tbody");

let number=document.createElement("td");
number.textContent="3";
newrow.append(number);

let date1=document.createElement("td");
date1.textContent="06-February-2025"
newrow.append(date1);

let date2=document.createElement("td");
date2.textContent="26-September-2025";
newrow.append(date2);

let date3=document.createElement("td");
date3.textContent="11-November-2025";
newrow.append(date3);

let date4=document.createElement("td");
date4.textContent="10-October-2025";
newrow.append(date4);

tablebody.append(newrow);

let newrow2=document.createElement("tr");

let number2=document.createElement("td");
number2.textContent="4";
newrow2.append(number2);

let q1=document.createElement("td");
q1.textContent="06-February=2026";
newrow2.append(q1);

let q2=document.createElement("td");
q2.textContent="13-November-2026";
newrow2.append(q2);

let q3=document.createElement("td");
q3.textContent="19-May-2026";
newrow2.append(q3);

let q4=document.createElement("td");
q4.textContent="29-January-2025";
newrow2.append(q4);

tablebody.append(newrow2);

let submitbtn=document.querySelector("input[type='submit']")

submitbtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let email=document.querySelector("input[type='email']").value
    let tel=document.querySelector("input[type='tel']").value
    let usernumber=document.querySelector("input[type='number']").value
    let text=document.querySelector("input[type='text']").value
})


