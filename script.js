let nums = document.querySelector('.numbers');
let cardOne = document.querySelector('#card-atall');
let cardTwo = document.querySelector('#card-atall2');
let numP = document.querySelector('.num-p')


function esconde() {
    cardOne.style.display = 'none';
    cardTwo.style.display = 'block';
}


nums.addEventListener('click', function onClick(event){
    nums.style.backgroundColor = 'hsl(25, 97%, 53%)';
    numP.style.color = 'white';
    // nums[i].style.color = 'white';
})


// function mostra() {
// }

// function mudaCor() {
//     for(let i = 0;i < nums.length;i++) {
//         nums[i].setAttribute('style', 'color: red');
//     }
// }