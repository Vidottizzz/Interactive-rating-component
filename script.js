let nums = document.querySelector('.numbers');
let cardOne = document.querySelector('#card-atall');
let cardTwo = document.querySelector('#card-atall2');
let numP = document.querySelector('.num-p')
let btnsbm = document.querySelector('#botaosubmit');
let rated = document.querySelector('#rated');

function esconde() {
    cardOne.style.display = 'none';
    cardTwo.style.display = 'block';

}

function validateForm() {
    var radios = document.getElementsByName("options");
    var formValid = false;
    
    var i = 0;
    rated.innerHTML = radios[i].tabIndex;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        if(radios[i].checked){
            rate_value = radios[i].value;
            console.log(rate_value);
        }
        i++;       
    }
    
    if (!formValid)
    {
        alert("Escolha uma opção");
        return formValid;
    }if(formValid) {
        esconde();
        rated.innerHTML = rate_value;
    }
    
    
}


// function mostra() {
// }

// function mudaCor() {
//     for(let i = 0;i < nums.length;i++) {
//         nums[i].setAttribute('style', 'color: red');
//     }
// }