// nested object
// reflection
// Save & Operate
// format & hard
var emp = {
    age: 20,
    name: 'Xyz',
    dept: 'HR',
    salary: 50000,
    address: {
        hNo: '1-123',
        locality: 'Tolichowki',
        city: 'Hyderabad',
        state: 'TS',
        pin: 500008
    }
};

// for in
// reflection
for (var key in emp) {
    console.log(key, emp[key]);
}