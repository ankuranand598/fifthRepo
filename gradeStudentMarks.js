var ip = [
    {
        grade: "V",
        students: [
            { name: "Nrupul", marks: [10, 20, 30] },
            { name: "Prateek", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VI",
        students: [
            { name: "Aman", marks: [10, 20, 30] },
            { name: "Albert", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VII",
        students: [
            { name: "Yogesh", marks: [10, 20, 30] },
            { name: "Sandhya", marks: [20, 30, 40] }
        ]
    }
];
for (var i = 0; i < ip.length; i++){
    var data = ip[i];
    var max = 0;
    var student_name = null;
    for (var j = 0; j < data.students.length; j++){
        //console.log(data.students[j]);
        var det = data.students[j];
        var mark = det.marks;
        //console.log(mark);
        var sum = mark.reduce(function (ac, el) {
            return ac + el;
        }, 0);
        //console.log(sum);
        if (sum > max) {
            max = sum;
            student_name = det.name;
        }
    }
    console.log(ip[i].grade, student_name, max);
}