var scores, roundScore, activePlayer, gamePlaying ;
init();


var lastDice;

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
        // radom number
        var dice1 = Math.floor(Math.random() * 6 ) + 1;
        var dice2 = Math.floor(Math.random() * 6 ) + 1;

        //display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = `dice-${dice2}.png`;

        //update the round score
        if (dice1 !== 1 && dice2 !== 1){
            roundScore += dice1 + dice2;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }

        /*
        if (dice === 6 && lastDice === 6){
            //player losses score
            scores[activePlayer] = 0;
            document.querySelector('#score--' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1 ){
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
        lastDice = dice;
    */
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
    
    var input = document.querySelector('.final-score').value;
    var winningScore;
    
    //undifend, 0,null or "" are Coerced to false
    
    if(input){
        winningScore = input;
    }else{
        winningScore = 100;
    }

    //check if player won the game
    if (scores[activePlayer] >= winningScore){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
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
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
   
}

document.querySelector('.btn--new').addEventListener('click', init);



function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
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