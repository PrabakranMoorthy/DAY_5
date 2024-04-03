        
// 1.Create Your Own Resume Data in JSON Format

let JsonResume = {
   "Name"      : "Prabakaran",
   "Age"       : "28",
   "Genter"    : "male",
   "Qualification": "CS",
   "Hobbies"   : "Cricket",
   "MailId"    : "sprabakaran533@gmail.com",
   "MobileNo"  : "9632587410",
   "skils"     : ["Js", "Html", "CSS", "React", "MangoDB", "NodeJS"],
   "languages" : ["tamil","english"],
};
console.log(JsonResume);

 //2JSON iterate for loops 



let JsonRe = {
  "Name"      : "Prabakaran",
  "Age"       : "28",
  "Genter"    : "male",
  "Qualification": "CS",
  "Hobbies"   : "Cricket",
  "MailId"    : "sprabakaran533@gmail.com",
  "MobileNo"  : "9632587410",
  "skils"     :["Js", "Html", "CSS", "React", "MangoDB", "NodeJS"],
  "languages" : ["tamil", "english"],
};
let data =Object.entries(JsonRe);
for (let i = 0; i < data.length; i++){
    console.log(data[i]);
}

//JSON iterate for in


let obj = {
  Name: "Prabakaran",
  Age: "28",
  Genter: "male",
  Qualification: "CS",
  Hobbies: "Cricket",
  MailId: "sprabakaran533@gmail.com",
  MobileNo: "9632587410",
  skils: ["Js", "Html", "CSS", "React", "MangoDB", "NodeJS"],
  languages: ["tamil", "english"],
};
let value  = Object.entries(obj);
for(let key in value ) {
  console.log(value[key]);
}

 //JSON iterate fot of


let ForOf = {
  "Name"     : "Prabakaran",
  "Age"      : "28",
  "Genter"   : "male",
  "Qualification": "CS",
  "Hobbies"  : "Cricket",
  "MailId"   : "sprabakaran533@gmail.com",
  "MobileNo" : "9632587410",
  "skils"    : ["Js", "Html", "CSS", "React", "MangoDB", "NodeJS"],
  "languages": ["tamil", "english"],
};
let Result = Object.entries(ForOf);
for (let i of Result) {
  console.log(i);
}


 //JSON iterate for Each

let code = {
  "Name"      : "Prabakaran",
  "Age"       : "28",
  "Genter"    : "male",
  "Qualification": "CS",
  "Hobbies"   : "Cricket",
  "MailId"    :  "sprabakaran533@gmail.com",
  "MobileNo"  : "9632587410",
  "skils"     : ["Js", "Html", "CSS", "React", "MangoDB", "NodeJS"],
  "languages" : ["tamil", "english"],
};
let val=Object.entries(code)
val.forEach((element) => console.log(element));



//JavaScript: window, document and screen

/* JavaScript, window, document, and screen are distinct objects that 
represent different aspects of a web browser and its environment.

Window Object

=> The window object represents the browser window and serves as the 
global object in client-side JavaScript. It encapsulates the entire 
browser window, including tabs, frames, and iframes. The window object
provides access to various properties and methods related to the 
browser environment, such as opening new windows, resizing, scrolling, 
and interacting with the browser's history.

Document Object

=> The document object represents the current web page displayed in the browser
window. It provides access to the HTML content of the page and allows you to
manipulate the structure, content, and styling using the Document Object
Model (DOM). Through the document object, you can access elements, 
modify their attributes and content, and respond to user interactions.

Screen Object

=> The screen object represents the user's screen dimensions and display properties.
It provides information about the user's monitor, such as screen width, height,
color depth, and pixel density. The screen object is useful for creating responsive
designs and adapting content to different screen sizes.

Window VS. Document VS. Screen

=> The window object represents the browser window itself and provides methods
for interacting with the browser's environment.
 
=> The document object represents the current web page's content and structure, 
allowing manipulation using the DOM.

=> The screen object provides information about the user's screen dimensions and
display properties.














*/


