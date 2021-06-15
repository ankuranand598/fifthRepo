function diagonal(ele,r,c,val){
for(var i=0;i<r;i++){
for(var j=0;j<c;j++){
if(ele[i][j]==val){

  var left = i+j;
  var right=i-j;
}
}
    }
     var res1='';
    var res2='';
  for(var k=0;k<r;k++){
   
  for(var l=0;l<c;l++){
  if(k+l==left){
  res1 += ele[k][l]+' ';
  }
    if(k-l==right){
  res2 += ele[k][l]+" ";
      
  }
   
  }
     
    
    }
     console.log(res1);
      console.log(res2);

 
}
function convertArr(row){
return row.split(' ').map(Number);
}

function runProgram(input) {
  var newInput = input.split(/[\r\n]+/);
  var rowcol = newInput[0].split(" ").map(Number);
  var row = rowcol[0];
  var col= rowcol[1];
  var data = newInput.slice(1,row+1);
  var arr = data.map(convertArr);
  var check=Number(newInput[newInput.length-1])
  diagonal(arr,row,col,check);
  
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});