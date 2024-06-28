// filter
var employees = [
    { name: 'emp1', salary: 10000, active: true },
    { name: 'emp2', salary: 12000, active: true },
    { name: 'emp3', salary: 15000, active: false },
    { name: 'emp4', salary: 20000, active: true },
];

function highlyPaid(emp) {
    return emp.salary >= 12000;
}

var res = employees.filter(function (emp) {
    return !emp.active;
});

console.log(res);
