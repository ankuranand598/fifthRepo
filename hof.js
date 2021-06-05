function runProgram(input) {
    var ip = input.toLowerCase().split(" ");
    var arr = [];
    var arr2 = [];
    for (var i = 0; i < ip.length; i++){
        var res = '';
        var res2 = '';
        for (var j = 0; j < ip[i].length; j++){
            res2 += ip[i][j];
            if (i != 0 && j == 0) {
                res +=ip[i][j].toUpperCase();
            } else {
                res +=ip[i][j];
            }
             
        }
        if (res != "") {
            arr.push(res);
            arr2.push(res2);
        }
        

    }
    console.log(arr.join(""));
    console.log(arr2.join("-"));
     console.log(arr2.join("_"));
}
if (process.env.USERNAME === "ankur") {
  runProgram(`A quick BROWN fox Jumps oveR a LazY DOg`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

