const playerchoicedisplay=document.querySelector('#playerchoicedisplay')
const computerchoicedisplay=document.querySelector('#computerchoicedisplay')
const rockbtn=document.querySelector('#rockbtn')
const paperbtn=document.querySelector('#paperbtn')
const scissorsbtn=document.querySelector('#scissorsbtn')
const result=document.querySelector('#result')
const computer=['Rock','Paper','Scissors']
const playerscore=document.querySelector('#playerscore')
const computerscore=document.querySelector('#computerscore')
let z=0;
let y=0;
rockbtn.addEventListener('click',()=>{
    const computerchoice=computer[Math.floor(Math.random()*3)]
    result.textContent=game('Rock',computerchoice)
    playerchoicedisplay.textContent=`Player: Rock`
    computerchoicedisplay.textContent=`Computer: ${computerchoice}`
    updateScores()
})
paperbtn.addEventListener('click',()=>{
    const computerchoice=computer[Math.floor(Math.random()*3)]
    result.textContent=game('Paper',computerchoice)
    playerchoicedisplay.textContent=`Player: Paper`
    computerchoicedisplay.textContent=`Computer: ${computerchoice}`
    updateScores()
})
scissorsbtn.addEventListener('click',()=>{
    const computerchoice=computer[Math.floor(Math.random()*3)]
    result.textContent=game('Scissors',computerchoice)
    playerchoicedisplay.textContent=`Player: Scissors`
    computerchoicedisplay.textContent=`Computer: ${computerchoice}`
    updateScores()
    
})
const game=(a,computerchoice)=>{
    let x;
    if (a===computerchoice){x= "tie"}
    else {
        switch(computerchoice){
        case 'Rock':
            x=a==='Paper' ? "you win":"you lose"
            break
        case 'Paper':
            x=a==='Rock' ? "you lose":"you win"
            break
        case 'Scissors':
            x=a==='Paper'?"you lose":"you win"
            }
    }
    return x
}
function updateScores() {
    if (result.textContent === 'you win') {
        z++;
        playerscore.textContent = `You: ${z}`;
    } else if (result.textContent === 'you lose') {
        y++;
        computerscore.textContent = `Computer: ${y}`;
    }
    if (z === 5 || y === 5) {
        if (z === 5) {
            result.textContent = 'Game over. You win!';
        } else {
            result.textContent = 'Game over. Computer wins!';
        }
        z = 0;
        y = 0;
        playerchoicedisplay.textContent = 'Player:';
        computerchoicedisplay.textContent = 'Computer:';
    }
}
