// calculate aggregate of a student when his marks are given
function calculateAgg(marks) {
    // (marksSecured/totalMarks)*100
    var marksSecured = 0;
    for (var i = 0; i < marks.length; i++) {
        marksSecured = marksSecured + marks[i];
    }

    var maxMarks = marks.length * 100;
    var agg = (marksSecured / maxMarks) * 100;
    console.log(agg);
}

calculateAgg([60, 50, 70, 80, 90, 85]);
calculateAgg([50, 50, 70, 60, 90, 85]);
calculateAgg([50, 50, 70, 62, 90, 85]);