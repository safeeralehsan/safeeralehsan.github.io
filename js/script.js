//Setting Elements
buttons = document.querySelectorAll('.addtoCart');
shopCart = document.getElementById('shoppingCart');

//Setting Up Local Storage
class Store {
    static getItems () {
        let items;
        if (localStorage.getItem('items') === null){
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }

    static addItem (item) {
        let items = Store.getItems();
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }

    static removeItems(item)  {
        let items = Store.getItems();
        let delID = item.id;
        let index = parseInt(delID.substr(delID.length-1));
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));  

        let remainingCart = document.getElementById('shoppingCart');
        items.forEach((item, index) => {
            remainingCart.children[index].children[2].firstChild.id = `delButton${index}`;
        });
    }

    static loadItems () {
        let items = Store.getItems();
        items.forEach((item) => {
            UI.addCart(item);
        });
    }
}

//UI class
class UI {
    static addCart(item){
        let cart = document.getElementById('shoppingCart');
        let cartItem = document.createElement('tr');
        let quantity = Store.getItems().length;
        cartItem.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><button style="" id="delButton${quantity}">Del</td>
        `;
        cart.appendChild(cartItem)
    }

    static removeFromCart(item){
        item.parentElement.parentElement.remove();
    }
}

//Item Class
class storeItem {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

//Setting up Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', addtoCart);
})
shopCart.addEventListener('click', removeItem);
document.addEventListener('DOMContentLoaded', Store.loadItems)


//Setting up Functions
function addtoCart (e) {
    let item = new storeItem();
    item.name = e.target.parentElement.children[0].textContent;
    item.price = e.target.parentElement.children[2].textContent;
    UI.addCart(item);
    Store.addItem(item);
}

function removeItem(e){
    if(e.target.hasAttribute('style')){
        UI.removeFromCart(e.target);
        Store.removeItems(e.target);
    }
}