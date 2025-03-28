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



let inputelement=document.createElement("input");
inputelement.type='text';
inputelement.placeholder='Assignment';

imageContainer.parentNode.insertBefore(inputelement, imageContainer);


inputelement.addEventListener('input', (event)=> {
    heading.textContent=event.target.value;
})

let submitbtn=document.querySelector("input[type='submit']")

submitbtn.addEventListener('click', (event)=> {
    event.preventDefault();
    let email=document.querySelector("input[type='email']").value
    let tel=document.querySelector("input[type='tel']").value
    let usernumber=document.querySelector("input[type='number']").value
    let text=document.getElementById("wheredidyoulearn").value
    populatetable(email, tel, usernumber, text);
})




function populatetable(emailaddress, telephoneno, usersnumber, inputtext)
{
    let table=document.getElementById("data-table");
    table.style.display="table"
    let tblbody=document.querySelector("#data-table tbody");
    let row1=document.createElement("tr");
    let d1=document.createElement("td");
    d1.textContent=emailaddress;
    row1.append(d1);
    let d2=document.createElement("td");
    d2.textContent=telephoneno;
    row1.append(d2);
    let d3=document.createElement("td");
    d3.textContent=usersnumber;
    row1.append(d3);
    let d4=document.createElement("td");
    d4.textContent=inputtext;
    row1.append(d4);
    tblbody.append(row1);
}


// 1. Get all the type of events that can be used as EventListeners
// 2. Read and demonstrate your understanding of hoisting in JavaScript (what will work and what won't)
// 3. Create an Input element above the div with the class "image-container" using JavaScript
      // - Add an eventlistener to this input element that will change the text of the main h1

// 4. Add an event listener to the Submit Button
    // - Capture the email, telephone, age and referee and display them in a tab


/*
Mouse
1. click
2. double Click
3. mouseover
4. mouseout
5. mousemove


Keyboard
1. keydown- when key is pressed down
2. keypress- triggered when a key is pressed
3. keyup- occurs when a key is released

Form 
1. submit- triggered when a form is submitted
2. change- happens when the value of an input field changes
3. focus- occurs when an element gains focus (eg. when you click into an input box)
4. blur- happens when an element loses focus

Window
1.unload
2.resize
3.scroll
4.beforeunload

Clipboard
1. copy
2. cut
3. paste

Media
1. play
2. pause
3. ended

Custom(Developer-created)
Developers can create their own using customevents and dispatch them using dispatchevents


*/