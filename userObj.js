var user = {
    'name' :'ironman',
    year: 1974,
    printAge: function () {
        return 2020 - this.year;
    }
}
console.log( user['name']+" " + user.printAge())