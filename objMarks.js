var marks = {
    data: [
        ['Nrupul', 10],
        ['Prateek', 20],
        ['Aman', 30],
        ['Albert', 5],
        ['Yogesh', 15]
    ],
  maximum: function () {
    for (key in this.data) {
      console.log(key+1);
    }
  },
  
  minimum: function () {
    
  },
  average: function () {
    
  }
    
                 
            
            
       }
          
           
        
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
