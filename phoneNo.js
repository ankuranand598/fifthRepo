var phone = {
    details: [
    ['Ajay', 21342],
    ['RamDas' ,32146],
    ['Rohith' ,23522],
    ['Nihal', 98743]
    ],
    find: function (name) {
        var count=0;
        for (var i = 0; i < this.details.length; i++){
            if (this.details[i][0] == name) {
                console.log(this.details[i][1]);
            } else {
                count++;
            }
            if (count == this.details.length) {
                console.log("No user found");
            }
           
        }
}
}
//console.log('Nihal'===phone.details[3][0])
phone.find('Nihal');
phone.find('Mani');