var marks = {
    data: [
        ['Nrupul', 10],
        ['Prateek', 20],
        ['Aman', 30],
        ['Albert', 5],
        ['Yogesh', 15]
    ],
  maximum: function () {
    var mrks = 0;
    for (var i = 0; i < this.data.length; i++){
      if (mrks < this.data[i][1]) {
        mrks = this.data[i][1];
      }
    }
    console.log(mrks)
  },
  
  minimum: function () {
    var mrks = this.data[1][1];
    for (var i = 0; i < this.data.length; i++){
      if (mrks > this.data[i][1]) {
        mrks = this.data[i][1];
      }
    }
    console.log(mrks);
  },
  average: function () {
    var sum = 0;
    for (var i = 0; i < this.data.length; i++){
      sum += this.data[i][1];
    }
    var avg = sum / this.data.length;
    console.log(avg)
  }
    
                 
            
            
       }
          
           
        
marks.average();
marks.minimum();
marks.maximum();
 //console.log(marks.maximum());   
   


/*console.log(marks.maximum());
const studentData = [
  {
    name:"nrupul",
    mark:10
  },
   {
    name:"aman",
    mark:20
  },
   {
    name:"prateek",
    mark:30
  },
   {
    name:"albeert",
    mark:15
  }, {
    name:"ankur",
    mark:5
  }
]
// console.log(studentData)
let avgMark = studentData.map(n => n.mark).reduce((a, b) => a + b, 0);
avgMark = avgMark/studentData.length
let min = studentData.map((item)=> item.mark)
min  = min.sort((a,b)=> a-b)

console.log("avgMark",avgMark)
console.log("min",min[0])
console.log("max",min[studentData.length-1]);*/
