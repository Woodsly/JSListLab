let cartArray = [];
function AddToArray(_name, _price){
    let itemSelected ={
        Name: _name,
        Price: _price
    };
    cartArray.push(itemSelected)
}

function grandTotal(){
    let total = 0;
    let count = 1;
    cartArray.forEach((num) => {
        console.log(`${count}. ${num.Name} costs $${num.Price}`)
        total += num.Price;
        count++;
    });
    let taxtotal = total * 1.06;
    console.log(`You owe $${(taxtotal).toFixed(2)} with tax included.  Tax added an extra $${(taxtotal - total).toFixed(2)}.`);
    cartArray = [];
}