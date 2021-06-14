var ip = `Rice 2 60
Dal 3 50
Salt 1 20`;
var twodarr = ip.split('\n');
function convert2d(ele) {
    return ele.split(" ");
};
op = twodarr.map(convert2d);
//console.log(op);
var arr = [];
for (var i = 0; i < op.length; i++){
    var user = createObj(op[i][0], op[i][1], op[i][2]);
    arr.push(user);
}
function createObj(name, quantity, price) {
    return { name: name, quantity: quantity, price: price };
}
var obj = {};
obj['data'] = arr;
obj['total'] = function total() {
    var sum = 0;
    for (var i = 0; i < this.data.length; i++){
        sum += (this.data[i].quantity * this.data[i].price);
    }
    console.log(sum);
};
console.log(obj);
obj.total();