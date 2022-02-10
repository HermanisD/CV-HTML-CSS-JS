import {education, work, courses, interests, social, languages, programLang} from "./model.js"
import {templates} from "./functions.js"


// Object insert in HTML
const $site = document.querySelector("#education");

education.forEach((block) => {
  
const toHTML = templates.education(block);
if(toHTML){
  $site.insertAdjacentHTML("beforeend", toHTML);
}});

const $site3 = document.querySelector("#work");
work.forEach((block) => {
  
  const toHTML = templates.work(block);

if(toHTML){
   $site3.insertAdjacentHTML("beforeend", toHTML);
 }});


 const $site4 = document.querySelector("#social");

 social.forEach((block) => {
 const toHTML = templates.social(block);
 
 if(toHTML){
    $site4.insertAdjacentHTML("beforeend", toHTML);
  }});
 
//Array of array  insert in HTML

const $site1 = document.querySelector("#courses");

courses.forEach((block) => {
  
const toHTML = templates.courses(block);

if(toHTML){
  $site1.insertAdjacentHTML("beforeend", toHTML);
}});

//Array insert in HTML
const $site6 = document.querySelector("#programLang");

const toHTML2 = programLang.join(", ");
console.log($site6);
if(toHTML2){
  $site6.insertAdjacentHTML("beforeend", toHTML2);
};



const $site2 = document.querySelector("#interests");

const toHTML = interests.join(", ");

if(toHTML){
  $site2.insertAdjacentHTML("beforeend", toHTML);
};

const $site5 = document.querySelector("#languages");

const toHTML1 = languages.join(", ");

if(toHTML){
  $site5.insertAdjacentHTML("beforeend", toHTML1);
};
