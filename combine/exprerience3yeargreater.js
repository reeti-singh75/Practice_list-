



function filterExperiencedEmployees(employees){
  let experiencedEmployees=[];
  for(let i=0;i<employees.length;i++){
    if(employees[i].experience>3&&employees[i].salary>50000){
     experiencedEmployees.push(employees[i])

    }
  }
  return experiencedEmployees;

}

const employees = [
  { name: "Rahul", experience: 5, salary: 60000, skills: ["JS", "React"] },
  { name: "Sneha", experience: 2, salary: 45000, skills: ["HTML", "CSS"] },
  { name: "Arjun", experience: 4, salary: 52000, skills: ["Node", "MongoDB"] },
  { name: "Meena", experience: 3, salary: 50000, skills: ["Python", "Django"] }
]; 

console.log(filterExperiencedEmployees(employees));


// output
// [
//   { name: "Rahul", experience: 5, salary: 60000, skills: ["JS", "React"], bonus: 6000 },
//   { name: "Arjun", experience: 4, salary: 52000, skills: ["Node", "MongoDB"], bonus: 5200 }
// ] 