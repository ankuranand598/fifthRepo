
function runProgram(input) {
    var ip = input.split("").map(Number);
    var res = 0;
    for (var i = 0; i < ip.length; i++){
        res += (2 * ip[i]) ** i;
    }
    console.log(res);
}

if (process.env.USERNAME === "ankur") {
  runProgram(`1001001`);
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

