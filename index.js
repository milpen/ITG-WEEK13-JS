const input1=document.getElementById("name");
const buttonSubmit=document.getElementById("btn");
const input2=document.getElementById('link');
const input3=document.getElementById('comment');

function userName (str1) {
let result1=str1.trim();

 if(result1 ==='') {
    return"Имя не введено";
}
result1 = result1[0].toUpperCase()+result1.slice(1).toLowerCase();
  //console.log(result1);
return result1;
}

function imageLink () {
  const parentImageLink =document.querySelector("#chat");
  const image=document.createElement('img');
  image.style.width='150px';
  image.src=input2.value;
  image.alt="UserAvatar";
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
  //console.log(outputName);
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

