const $container = document.querySelector('.card-container');
const $submitBtn = document.querySelector('.submitBtn');
const $pishka = document.querySelector('.pishka');
const $cardHeader = document.querySelector('.card-header');
const $textHeader = document.querySelector('.texttt')
const $cardFooter = document.querySelector('.card-footer')
const $cardBody = document.querySelector('.card-body');
let innerValues=[];
let askCounter;
$submitBtn.addEventListener('click' , e=>{
    e.preventDefault();
    askCounter = +prompt('сколько человек участвуют? напишите в цифрах' , 3)
    checker(askCounter);
    addInput()
})
// deleting tags
function Del(a){
    a.classList.add('removeTag')
}
function checker(askCounter){
    if(askCounter<1){
        alert('надо не менее двух людей')
    }else{
        localStorage.setItem('counter' , JSON.stringify(askCounter))
        $cardHeader.insertAdjacentHTML('afterbegin' , `<p>Names of players</p>`)
        Del($textHeader)
        Del($submitBtn)
        $cardFooter.insertAdjacentHTML('afterbegin' , `<button onclick="completeBtn()" class="btn  btn-success">Complete</button>`)
        Del($pishka)
    }
}
// adding inputs to cardbody 
function addInput(){     
    for (let i = 0; i < askCounter; i++) {
        $cardBody.insertAdjacentHTML('afterbegin' , `<input class="inputs inp${i+1} mt-2" type="text" placeholder="names of player №${i+1}"><br>`)  
    }
}
const $inputs = document.querySelector('.inp')
// cheking inputs and completing task
function completeBtn(){
    const $compBtn = document.querySelector('.btn-success')
    for (let i = 0; i < askCounter; i++){
        const $inputs = document.querySelector(`.inp${i+1}`);  
        if($inputs.value === ''){
            return alert('пустые поля')
        }
        else if($inputs.value !== '' && $inputs.value !==''){
            Del($inputs)
            Del($compBtn)
            createBtn()
        }
    }
    for (let j = 0; j < askCounter; j++) {
        const inp = document.querySelector(`.inp${j+1}`)
        innerValues.push(inp.value)
        localStorage.setItem('values' , JSON.stringify(innerValues))
        $cardBody.insertAdjacentHTML('afterbegin' , `<li class="li${j+1} lishka">${inp.value}</li>`)
    }
}
const getRando = document.querySelector('.getRando');
function createBtn(){
    getRando.classList.add('create')
}
function getRandom(){
    let count = JSON.parse(localStorage.getItem('counter'))
    let random = Math.floor(Math.random()*count )
    if(document.querySelector('.colored')){
        const rand = document.querySelector(`.li${random+1}`)
        rand.classList.remove('colored')
        console.log(rand);
    }else{
        const rand = document.querySelector(`.li${random+1}`)
        rand.classList.toggle('colored')
    console.log(rand);
    }
}