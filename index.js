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