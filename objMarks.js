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
            for (k in this.data) {
                if (this.data[k] > this.data[k + 1]) {
                    temp = this.data[k];
                    this.data[k] = this.data[k + 1];
                    this.data[k + 1] = temp;
                     
                }
                 
            }
             
       }
          
           
        console.log(this.data[k][1]);
        
    }
   
}

marks.maximum();