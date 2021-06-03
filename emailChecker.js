function runProgram(input) {
    var ip = input.split("");
    var flag = true;
   
    for (var i = 0; i < ip.length; i++){
        if (ip[0] == '@') {
            flag = false;
            break;
        }else if (ip.indexOf('@') == undefined) {
           //console.log("No");
            //break; 
            flag = false;
            break;
        }else if (ip[0] == '.') {
           //console.log("No");
           // break; 
            flag = false;
            break;
        } else if (ip[i] == '@' && ip[i + 1] == '.') {
            flag = false;
            break;
        } else if (ip[i] == '.' && ip[i + 1] == '.') {
           //console.log("No");
            //break; 
            flag = false;
            break;
        } else if (ip[i] == '(' || ip[i] == ')' || ip[i] == '*' || ip[i] == '^' || ip[i] == '$') {
          //console.log("No");
            flag = false;
            break;
               
        } else if (ip.indexOf('.') != ip.length - 4 && ip.indexOf('.') != ip.length - 3) {
            //console.log("No");
            //break;
            flag = false;
            break;
        } else {
            //console.log("Yes");
            //break;
            flag = true;
        }
    }
    if (flag == false) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}
if (process.env.USERNAME === "ankur") {
  runProgram(`masai@.com`);
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

