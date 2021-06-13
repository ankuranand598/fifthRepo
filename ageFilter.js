var input = `Nrupul 32
Prateek 30
Aman 26
Ankur 34
Albert 28
Yogesh 44
Sidharth 22`;
var data = input.split("\n");
//console.log(data);
function convertArray(ele) {
    var el = ele.split(' ');
    var arr = [];
    arr.push(el[0], Number(el[1]));
    return arr;
}

var op=data.map(convertArray);
//console.log(op);
//var temp = `ankur 23`;
//console.log(convertArray(temp));
var userarr = [];
for (var i = 0; i < op.length; i++){
    var user = createUser(op[i][0], op[i][1]);
    userarr.push(user);
    
}
function createUser(name, age) {
    return { name: name, age: age };
}
//console.log(userarr);
userarr.sort(function (a, b) {
    return a.age - b.age;
});
//console.log(userarr);
for (var i = 0; i < userarr.length; i++){
    if (userarr[i].age > 30) {
        console.log(userarr[i].name);
    }
}