/*Given two words (small case) if they are anagrams 
print "TRUE" otherwise "FALSE" */
function runProgram(input) {
    var newInput = input.split("\n");
    var ip1 = newInput[0].trim().toLowerCase().split("");
    var ip2 = newInput[1].trim().toLowerCase().split("");
    var flag = true;
    ip1.sort(); ip2.sort();
    if (ip1.length === ip2.length) {
        for (i = 0; i < ip1.length; i++) {
            if (ip1[i] != ip2[i]) {
                flag = false;
                break;
            } else {
                flag = true;
        }
        }
    } else {
        flag = false;
    }
    if (flag == true) {
        console.log('True');
    } else {
        console.log('False');
    }
}
if (process.env.USERNAME === "ankur") {
    runProgram(`wind
    dwine`);
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

