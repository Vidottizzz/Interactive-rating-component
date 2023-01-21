let nums = document.querySelector('.numbers');
let cardOne = document.querySelector('#card-atall');
let cardTwo = document.querySelector('#card-atall2');
let numP = document.querySelector('.num-p')
let btnsbm = document.querySelector('#botaosubmit');


function esconde() {
    cardOne.style.display = 'none';
    cardTwo.style.display = 'block';

}
// document.getElementById("prevent").addEventListener("click",(event)=>{
//     event.preventDefault();
// })


function validateForm() {
    var radios = document.getElementsByName("options");
    var formValid = false;
    
    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }
    
    if (!formValid)
    {
        alert("Must check some option!");
        return formValid;
    }if(formValid) {
        esconde();
    }
    
    
}


// function mostra() {
// }

// function mudaCor() {
//     for(let i = 0;i < nums.length;i++) {
//         nums[i].setAttribute('style', 'color: red');
//     }
// }