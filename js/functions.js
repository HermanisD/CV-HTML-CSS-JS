function education(block) {
  return `
  <div class = "row">
              <div class = "col-lg-2">${block.period}</div>
              <div class = "col-lg-2">${block.university.toUpperCase()}</div>
              <div class = "col-lg-2">${block.speciality}</div>
              <div class = "col-lg-6">${block.programm}</div>  
          </div>
  `;
}
function work(block) {
  return `
  <div class = "row">
  <div class = "col-lg-2">${block.period}</div>
  <div class = "col-lg-2">${block.employer.toUpperCase()}</div>
  <div class = "col-lg-2">${block.position}</div>
  <div class = " col-lg-6 visible-md visible-lg visible-xl">${block.duties}</div>  
</div>`
}
function courses(block) {
    return `
      <div class="row">
      <div class = "col-lg-1">${block[0]}</div>
      <div class = "col-lg-6">${block[1]}</div>
      <div class = "col-lg-5">${block[2]}</div>
           </div>
        `;
}
function social(block) {
  return `
  <div class = "row">
  <div class = "col-lg-2">${block.period}</div>
  <div class = "col-lg-10">${block.activity}</div>    
</div>`
}





function language(block) {
  return `
        <div class="row">
           <img scr="${block.value}"/>
        </div>
          `;
}
export const templates = {
  education: education,
  work: work,
  courses: courses,
  social: social,
  language: language,
};
