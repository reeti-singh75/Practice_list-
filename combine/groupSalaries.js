
function groupSalaries(totalsalari) {
    return totalsalari;
}

function callbackfunction(employees) {
    let totalsalari = { HR: 0, Tech: 0, Sales: 0 };
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].department === "HR") {
            totalsalari.HR = totalsalari.HR + employees[i].salary;
            // console.log(totalsalari);
        } else if (employees[i].department === "Tech") {
            totalsalari.Tech = totalsalari.Tech + employees[i].salary;
            // console.log(totalsalari);
        } else if (employees[i].department === "Sales") {
            totalsalari.Sales = totalsalari.Sales + employees[i].salary;
            // console.log(totalsalari);

        }
    }

     return groupSalaries(totalsalari);
    // return totalsalari;
}


const employees = [{ name: "Amit", department: "HR", salary: 50000 },
{ name: "Amit", department: "HR", salary: 50000 },
{ name: "Neha", department: "Tech", salary: 90000 },
{ name: "Raj", department: "Tech", salary: 75000 },
{ name: "Simran", department: "Sales", salary: 40000 },]


console.log(callbackfunction(employees));

