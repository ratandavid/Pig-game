var scores, roundScore, activePlayer, gamePlaying ;
init();


/*
    we don't need this code here outside the function  because it use while reload 
    dice = Math.floor(Math.random()*6 + 1);
*/
/*document.querySelector('.dice').style.display = 'none';*/
/* ye mane khud kiya hai dekne k liye k query selector s hoga k nahi

document.querySelector('#score--0').textContent = '0';
document.querySelector('#score--1').textContent = '0';
document.querySelector('#current--0').textContent = '0';
document.querySelector('#current--1').textContent = '0';



document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

*/



document.querySelector('.btn--roll').addEventListener('click', function(){
    if (gamePlaying){
        
    // 1. random number
    // we only need this here as soon as user click on this button 
    var dice = Math.floor(Math.random()*6 + 1);

    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    // dice which is in between + dice + is the variable that only this function is use 
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    // 3. update the round score if the rolled  number was not a 1
    if (dice !== 1){
        //add Score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else {
       //next player
        nextPlayer();
        /*
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current--0').textContent = '0';
            document.getElementById('current--1').textContent = '0';

            document.querySelector('.player--0').classList.toggle('player--active');
            document.querySelector('.player--1').classList.toggle('player--active');

            document.querySelector('.dice').style.display = 'none'; 
        */
        

    }
    }
   
});


//we addEventlistner here beacause we want to hold that point in global score
//and it is anonimus fuction (which mean we cant use it again and again)
document.querySelector('.btn--hold').addEventListener('click', function(){
    if (gamePlaying){
        
    //Add current score to globel score
    scores[activePlayer] += roundScore;

    //update ui
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];


    //check if player won the game
    if (scores[activePlayer] >= 10){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('player--active');
        gamePlaying = false;   
    }else{
        nextPlayer();
    }
   
   
   /*
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none'; 
   */
    }
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none'; 
   
}

document.querySelector('.btn--new').addEventListener('click', init);



function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('palyer--active');
    document.querySelector('.player-1-panel').classList.remove('palyer--active');
    document.querySelector('.player-0-panel').classList.add('palyer--active');

}






/* we dont need this 
//document.querySelector('#current--' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;
//console.log(x); */