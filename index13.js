// conditional statements
// conditional operators
// if
// if else
// if else if ladder
// var marks = 30;

// if (marks >= 40) {
//     console.log('Passed');
// }
// else {
//     console.log('Failed');
// }

// console.log('Failed');

var agg = 65;

// Distinction: >=70
// First class: >=60 && < 70
// Second class: >= 50 && < 60
// Third class: >=40 && <= 50
// elif - else if

if (agg >= 70) {
    console.log('Distinction');
}
else if (agg >= 60) {
    console.log('First class');
}
else if (agg >= 50) {
    console.log('Second class');
}
else if (agg >= 40) {
    console.log('Third class');
}
else {
    console.log('Failed');
}