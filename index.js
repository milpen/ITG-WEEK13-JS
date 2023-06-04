"use strict"
const input1=document.getElementById("name");
const buttonSubmit=document.getElementById("btn");
const input2=document.getElementById('link');
const input3=document.getElementById('comment');
const no=document.getElementById("no");

function userName (str1) {
let result1=str1.trim();

 if(result1 ==='' || no.checked ||result1 ===' ') {
    return"Username";
} else {
result1 = result1[0].toUpperCase()+result1.slice(1).toLowerCase();
return result1;
}
}

function imageLink () {
  const parentImageLink =document.querySelector("#chat");
  const arrayAvatars = [
    "./images/avatar1.png",
    "./images/avatar2.png",
    "./images/avatar3.png",
    "./images/avatar4.png",
    "./images/avatar5.png",
  ];
  const image=document.createElement('img');
 if (input2.value ==="" ||input2.value ===" ") {
  const randomAvatar = arrayAvatars[Math.floor(Math.random() * arrayAvatars.length)];
  image.src=randomAvatar;
 } else {
  image.src=input2.value;
 }
 image.style.width='150px';
 parentImageLink.appendChild(image);
}

function checkSpam(str2) {
  let result2= /viagra|xxx/ig;
  return str2.replace(result2, ' *** ');
}

function outputUserName (userName) {
  const parentUserName=document.querySelector("#chat");
  const outputName=document.createElement('p');
  outputName.textContent=userName(input1.value);
  parentUserName.appendChild(outputName);
}
const currentDate= new Date();
const dateString=currentDate.toDateString();
const timeString=currentDate.toLocaleTimeString();
const modifiedDate=`${dateString}  at  ${timeString}`;

function date() {
  const parentShowDate=document.querySelector("#chat");
  const showDate=document.createElement('p');
  showDate.textContent=modifiedDate;
  parentShowDate.appendChild(showDate);
}

function outputUserText (checkSpam) {
  const parentUserText=document.querySelector("#chat");
  const outputText=document.createElement('p');
  outputText.textContent=checkSpam(input3.value);
  parentUserText.appendChild(outputText);
}

const formUser=document.getElementById("form");
formUser.addEventListener("submit", (evt)=> {
  evt.preventDefault();
  outputUserName(userName);
  date();
  imageLink();
  outputUserText(checkSpam);
  formUser.reset();
});