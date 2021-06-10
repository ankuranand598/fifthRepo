var arr = [
    { Product_Name: 'OnePlus', Category: 'Electronics', Price: 29000 },
    { Product_Name: 'Coffee', Category: 'Grocery', Price: 400 },
    { Product_Name: 'Pen', Category: 'Office', Price: 30 },
    { Product_Name: 'Book', Category: 'Office', Price: 60 },
    { Product_Name: 'Rice', Category: 'Grocery', Price: 100 },
    {Product_Name:'Earphones' ,Category:'Electronics' ,Price:1000 }
]
console.log(arr[1].Category);
for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[0].length; j++){
        console.log(arr[i][j].Price);
    }
}
