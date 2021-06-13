var ip = `Nrupul cmd
Prateek js
Aman ds
Nrupul python
Albert js
Albert react
Aman algo
Prateek html
Nrupul sql`;
var data = ip.split('\n');
var obj = {};
function convertObj(ele) {
    return ele.split(' ');
  
};
var op = data.map(convertObj);
//console.log(op);
for (var i = 0; i < op.length; i++){
    if (obj[op[i][0]]==undefined) {
        obj[op[i][0]] = [op[i][1]];
    } else {
        obj[op[i][0]].push(op[i][1]);
    }
}
//console.log(obj);
for (key in obj) {
    for (var i = 0; i < obj[key].length; i++) {
        if (obj[key][i] == 'ds') {
            console.log(key);
        }
    }
}