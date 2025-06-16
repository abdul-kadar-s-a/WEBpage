const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
});


btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
});

document.addEventListener('DOMContentLoaded',LoadFood);

function LoadFood(){
    loadContent();

}

function loadContent(){
//Remove food Items
let btnRemove=document.querySelectorAll('.cart-remove');
btnRemove.forEach((btn)=>{
   btn.addEventListener('click',removeItem);
});

//product item change
let qtyElements=document.querySelectorAll('.cart-quantity');
qtyElements.forEach((input)=>{
   input.addEventListener('change',changeQty);
});

//addcart
let cartBtns=document.querySelectorAll('.add-cart');
console.log(cartBtns);
cartBtns.forEach((btn)=>{
   btn.addEventListener('click',addcart);
});
}
//remove item
function removeItem(){
    if(confirm('Are ypur sure to remove')){ 
    this.parentElement.remove();
}
}

//change Quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
}


//add cart
function addcart(){
let food=this.parentElement;
let title=food.querySelector('.food-title').
innerHTML;

let price=food.querySelector('.food-price').
innerHTML;


let imgSrc=food.querySelector('.food-img').src;

console.log(title,price,imgSrc);

}
