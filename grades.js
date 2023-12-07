document
.querySelector('form')
.addEventListener('submit', setGrade)

let grades = [];
function setGrade(e) {
    e.preventDefault();
    let grade = document.querySelector('#grade').value
    grades.push(grade);
}