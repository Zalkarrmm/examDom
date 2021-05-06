const $submitBtn = document.querySelector('.submitBtn');
const $card = document.querySelector('.card-body')
const container = document.querySelector('.card-container' )
const $pishka = document.querySelector('.pishka')
const $footer = document.querySelector('.card-footer')
const $completeBtn = document.querySelector('.completeBtn')
let askCounter;

$submitBtn.addEventListener('click' , e=> {
    e.preventDefault();
    askCounter = +prompt('сколько участников? в числах' , 2)
    if(askCounter<2){alert('меньше дух нельзя')}
    else{
        for (let i = 0; i < askCounter; i++) {
            $card.insertAdjacentHTML('afterbegin' , `<input class='inputName${i+1}' placeholder="person№${1+i}"><br>`)
            $submitBtn.classList.add('deleted')
            $completeBtn.classList.add('displyFflex')
            $pishka.innerHTML = ''
        }
        
    }
})
        
function getValue(){ 
    for(let i = 0; i < askCounter; i++) {
        const inputs = document.querySelector(`.inputName${i+1}`)
        if(inputs.value == ''){
            return alert('reree')
        }else if(inputs.value != ''){
            console.log(inputs.value)
         return alert('succes')
        }  
    }
}

