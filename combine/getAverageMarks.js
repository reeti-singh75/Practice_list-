


function getAverageMarks(students) {
    let avarage = [];
    for (let i = 0; i < students.length; i++) {
        let sum = students[i].marks.reduce((a, b) => a + b, 0);
        let av = { name: students[i].name, avarage: sum / students[i].marks.length }
        avarage.push(av);
    }
    return avarage;
}

const students = [{ name: "John", marks: [80, 90, 100] },
{ name: "Sara", marks: [70, 85, 90] }];

console.log(getAverageMarks(students));

