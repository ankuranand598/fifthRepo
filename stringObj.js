var object = {
    callItem: "FireFox",
    vow: "aeiouAEIOU",
    count: 0,
    caps: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    smal: "abcdefghijklmnopqrstuvwxyz",
    res: "",
    res1:"",
    vowelsCount: function () {
        
        for (key in this.callItem) {
            for (k in this.vow) {
                if (this.callItem[key] == this.vow[k]) {
                    //console.log(this.callItem[key] == this.vow[k]);
                    this.count++;
                }
            }
        }
        console.log(this.count);
    },
    changeCase: function () {
        for (key in this.caps) {
            for (k in this.smal) {
                if (this.callItem[key] == this.caps[k]) {
                    this.res+=this.smal[k];
                    
                } else if (this.callItem[key] == this.smal[k]) {
                  this.res+=this.caps[k];  
                }
            }
        }
        console.log(this.res);
    },
    reverse: function () {
        for (var i = this.callItem.length-1; i >= 0; i--){
            this.res1 += this.callItem[i];
        }
        console.log(this.res1);
    }
}
object.vowelsCount();
object.changeCase();
object.reverse();
