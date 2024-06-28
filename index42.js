// map: transform
var employees = [
    { name: 'emp1', salary: 10000, active: true },
    { name: 'emp2', salary: 12000, active: true },
    { name: 'emp3', salary: 15000, active: false },
    { name: 'emp4', salary: 20000, active: true },
];

function increment(emp, index) {
    if (emp.active) {
        emp.salary = emp.salary + (emp.salary * 0.1);
    }

    return emp;
}

var res = employees.map(increment);

console.log(res);