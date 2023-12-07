document
.querySelector('form')
.addEventListener('submit',  setGrade)

let grades = [];
function setGrade(e) {
    e.preventDefault();
    let grade = parseFloat(document.querySelector('#grade').value)
    let name = document.querySelector('#name').value
    console.log(grades);
    grades.push({name,grade});
    printGrades();
}

function printGrades() {
    let o = document.querySelector('#output');
    let sum = 0;
    for (let i=0; i<grades.length; i++) {
        sum += grades[i].grade;
        }
    let avg = sum / grades.length;
    o.innerText = avg;
}