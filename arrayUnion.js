var data = {
    arr1: [1, 2, 3, 4],
    arr2: [2, 4, 6, 8]
}
var newarr=[]
for (var i = 0; i < data.arr1.length; i++) {
    for (var j = 0; j < data.arr1.length; j++){
        if(data.arr1[i] == data.arr2[j]) {
            newarr.push(data.arr1[i])
        }
    }
}
console.log(newarr);