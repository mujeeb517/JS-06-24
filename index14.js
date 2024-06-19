// conditional statement: switch
var agg = 70;

// if (agg >= 70) {
//     console.log('Distinction');
// }
// else if (agg >= 60) {
//     console.log('First class');
// }
// else if (agg >= 50) {
//     console.log('Second class');
// }
// else if (agg >= 40) {
//     console.log('Third class');
// }
// else {
//     console.log('Failed');
// }

switch (agg) {
    case 70:
        console.log('Distinction');
        break;
    case 60:
        console.log('First class');
        break;
    case 50:
        console.log('Second class');
        break;

    case 40:
        console.log('Third class');
        break;

    default:
        console.log('Failed');
        break;
}