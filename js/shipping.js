const billing = document.querySelector('#billing');
const cant = document.querySelector('.num');
let totalTxt = document.querySelector('.total');

billing.addEventListener('click', plus_minusItem);

function plus_minusItem(e){
    let item = 0;
    let button = '';
    
    if(e.target.classList.contains('plus')){ 
        item = parseInt(e.target.previousElementSibling.textContent);
        button = 'plus';
        e.target.previousElementSibling.textContent = '';
        e.target.previousElementSibling.textContent = item + 1;
        billingChange(e.target , button);
    }
        
    if(e.target.classList.contains('minus')){
            
        if(parseInt(e.target.nextElementSibling.textContent) <= 0){
            console.log('es menor a 0')
        }else{
            item = parseInt(e.target.nextElementSibling.textContent);
            button = 'minus';
            e.target.nextElementSibling.textContent = '';
            e.target.nextElementSibling.textContent = item - 1;
            billingChange(e.target , button);
        }
     }
};

const billingChange = (position, button) =>{
    let newTotal = 0;
    const price = Number(position.parentElement.previousElementSibling.children[0].textContent.split('$')[1]);
    
    const total = Number(totalTxt.children[1].innerText.split('$')[1]);

    if(button === 'plus'){
        newTotal = total + price;
        return totalTxt.children[1].innerText = '$' + newTotal.toFixed(2)
    }

    if(button === 'minus'){
        newTotal = total - price;
        return totalTxt.children[1].innerText = '$' + newTotal.toFixed(2)
    }
};