var obj = {
    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: function (item) {
        //var item = 4;
        for (var i = 0; i < this.data.length; i++){
            if (this.data[i] < item) {
                console.log(this.data[i]);
            }
        }
    },
    greaterThanItems: function (item) {
        //var item = 6;
        for (var i = 0; i < this.data.length; i++){
            if (this.data[i] > item) {
                console.log(this.data[i]);
            }
        }
    }
}
obj.lessThanItems(4);//taking parameter here;
obj.greaterThanItems(6);