var input = "Early Monday     morning   MUSIC".toLowerCase().split(" ");
var arr = []
for (var i = 0; i < input.length; i++){
    if (input[i] == "") {
       // 
        continue;
    } else {
      arr.push(input[i]);  
    }
}
//console.log(arr[1][0].toUpperCase());
for (var j = 0; j < arr.length; j++){
    var res = [];
    for (var k = 0; k < arr[j].length; k++){
        //console.log(arr[j][k]);
        if (j == 0) {
            //console.log(arr[0][k].toLowerCase());
            res.push(arr[0][k].toLowerCase());
        } else if (k == 0) {
            //console.log(arr[j][k].toUpperCase());
            res.push(arr[j][0].toUpperCase());
        } else {
            //console.log(arr[j][k].toLowerCase());
            res.push(arr[j][k].toLowerCase());
             
        }
       
    }
   console.log(res.split("\n"));
    }
    
 