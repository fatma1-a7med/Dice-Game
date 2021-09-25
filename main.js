   //fetch data 
    const activePlayer0=document.querySelector('.player0');
    const activePlayer1=document.querySelector('.player1');

    const finalScore=document.querySelector('.finalScore');
    const finalScore0=document.querySelector('.finalScore0');
    const finalScore1=document.querySelector('.finalScore1');

    const currentScore=document.querySelector('.current-score');
    const currentScore0=document.getElementById('current-score0');
    const currentScore1=document.getElementById('current-score1');
  
    const newGame=document.querySelector('.new-game');
    const rollDice=document.querySelector('.roll-dice');
    const diceImg=document.querySelector('.hidden');
    const hold=document.querySelector('.hold');

    finalScore0.textContent=0;
    finalScore1.textContent=0;
    let theCurrent=0;
    let activePlayer=0;
    const score=[0,0] //final scores of players 
    let playing=true;

   const switchPlayer=function(){
    document.getElementById(`current-score${activePlayer}`).textContent=0;
    theCurrent=0;
    activePlayer=activePlayer===0 ? 1 :0;
    activePlayer0.classList.toggle('player--active');
    activePlayer1.classList.toggle('player--active');
   };

 //when u click on button rollDice...

    rollDice.addEventListener('click',function(){
        if(playing)
        {
         const dice=Math.trunc(Math.random() *6) +1;
          // console.log(diceImg);
         diceImg.classList.remove('hidden'); 
         diceImg.src=`dice imgs/dice${dice}.png`;
       // currentScore1.textContent=dice;
           if(dice!==1)
           {
              theCurrent+=dice;
              // currentScore1.textContent=theCurrent;
              document.getElementById(`current-score${activePlayer}`).textContent=theCurrent;
           }
           else
           {
            switchPlayer();
           }
       }
    });
 
 //when u click on button hold to switchplayer & put the total sum of current int the Score of other player...

   hold.addEventListener('click',function(){
      if(playing)
      {
         //add current score to the active score
        score[activePlayer]+=theCurrent;
        document.querySelector(`.finalScore${activePlayer}`).textContent=score[activePlayer];

          if (score[activePlayer] >= 100)
            {
             playing=false;
             diceImg.classList.add('hidden');
             document.querySelector(`.player${activePlayer}`).classList.add('player--winner');
             document.querySelector(`.player${activePlayer}`).classList.remove('player--active');
            }
          else
           {
             switchPlayer();
           }
       }
   });

 //when u click on button new game to reload everything...
    newGame.addEventListener('click',function(){
       finalScore0.textContent=0;
       finalScore1.textContent=0;
       currentScore0.textContent=0;
       currentScore1.textContent=0;
       activePlayer0.classList.remove('player--winner');
       activePlayer1.classList.remove('player--winner');
       activePlayer1.classList.remove('player--active');
       activePlayer0.classList.add('player--active');
       diceImg.classList.remove('hidden');

       playing=true;
});
