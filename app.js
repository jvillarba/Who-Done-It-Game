console.log('this is working')

var startButton = document.getElementById('start')
var suspectCards = document.getElementsByClassName('suspect')
var weaponCards = document.getElementsByClassName('weapon')
var instructions = document.getElementById('instructions')
var boxes = document.getElementsByClassName('box')

var scarletImg = '<img class="suspect" src="images/Miss_Scarlett.png" id="scarlet" />'
var greenImg = '<img class="suspect" src="images/Mr_Green.png" id="green" />'
var plumImg = '<img class="suspect" src="images/Prof_Plum.png" id="plum" />'
var whiteImg = '<img class="suspect" src="images/Mrs_White.png" id="white" />'
var candlestickImg = '<img class="weapon" src="images/candlestick.png" id="candlestick" />'
var pipeImg = '<img class="weapon" src="images/pipe.png" id="pipe" />'
var malletImg = '<img class="weapon" src="images/mallet.png" id="mallet" />'
var gunImg = '<img class="weapon" src="images/gun.png" id="gun" />'
var cardImg = '<img class="cardCl" src="images/card.png" id="cardId" />'

var pictures = [
  scarletImg, greenImg, plumImg, whiteImg, candlestickImg, pipeImg, malletImg, gunImg
]
var suspects = [
  {name: 'Miss Scarlet', id: 'scarlet'},
  {name: 'Mr Green', id: 'green'},
  {name: 'Professor Plum', id: 'plum'},
  {name: 'Mrs White', id: 'white'}
]
var weapons = [
  {item: 'candlestick', id: 'candlestick'},
  {item: 'lead pipe', id: 'pipe'},
  {item: 'mallet', id: 'mallet'},
  {item: 'gun', id: 'gun'}
]
var killer = {}
var playerGuess = {}

var game = {
  player1: {
    name: "Player 1",
    score: 0
  },
  player2: {
    name: "Player 2",
    score: 0
  }
}

// FROM BRYAN FROM PHILIPPE HOW TO SWITCH BETWEEN PLAYERS
var currentPlayer = game.player1

function switchTurn(){
  if(currentPlayer == game.player1){
    currentPlayer = game.player2
    console.log(currentPlayer)
  } else {
    currentPlayer = game.player1
    console.log(currentPlayer)
  }
  return currentPlayer
}

  // ADDS SCORING FUNCTION
  // function incrementScore(){
  //   currentPlayer.score += 1
  // }

// CLICKING START BUTTON
startButton.addEventListener('click', function(){
    console.log('start game now')

// SHUFFLES THE PICTURES ARRAY
  function fisherYates (myArray) {
      var i = myArray.length;
      if ( i == 0 ) return false;
      while ( --i ) {
        var j = Math.floor( Math.random() * ( i + 1 ) );
        var tempi = myArray[i];
        var tempj = myArray[j];
        myArray[i] = tempj;
        myArray[j] = tempi;
     }
  }

// random generator
//     function pickRandom(x){
//       x = Math.floor(Math.random() * boxes.length)
//       return x
//     }

// LAYS OUT THE CHOICES ON THE BOARD
      for (var i = 0; i < boxes.length; i++) {
        fisherYates(pictures)
        boxes[i].innerHTML = pictures.splice(0,1)
    }

// CLEARS KILLER OBJECT FOR NEW GAME
  killer = {}

// COMPUTER RANDOMLY PICKS KILLER & WEAPON
  killer.suspect = suspects[Math.floor(Math.random() * suspects.length)]
  killer.weapon = weapons[Math.floor(Math.random() * weapons.length)]

// DISPLAYS KILLER
  console.log(killer)

// PLAYER CHOOSES A SUSPECT
  instructions.innerHTML = "Pick a suspect"

  for (var i = 0; i < suspectCards.length; i++) {
      suspectCards[i].addEventListener('click', function(){
      playerGuess.suspect = (this.id)
      instructions.innerHTML = "You chose " + playerGuess.suspect +". Now, what weapon do you think they used?"
      })
  }
  // if (this.id === killer.suspect.id) {
  //   console.log('you got em')
  //   return
  // }
  //   console.log('wrong. try again')

// PLAYER CHOOSES A WEAPON
  for (var i = 0; i < weaponCards.length; i++) {
      weaponCards[i].addEventListener('click', function(){
      playerGuess.weapon = (this.id)
      instructions.innerHTML = "You chose the " + playerGuess.weapon
      getWinner()
      switchTurn()
      })

  }
  // if (this.id === killer.weapon.id) {
  //   console.log('right weapon')
  //   return
  // }
  //   console.log('wrong. try again')


  //

  var getWinner = function() {
    if (playerGuess.suspect === killer.suspect.id && playerGuess.weapon === killer.weapon.id){
      instructions.innerHTML = "You win"
    } else if ((playerGuess.suspect === killer.suspect.id && playerGuess.weapon !== killer.weapon.id) || (playerGuess.suspect !== killer.suspect.id && playerGuess.weapon === killer.weapon.id)){
      instructions.innerHTML = "You have one right"
    } else {
      instructions.innerHTML = "Sorry, try again"
    }
  }

    //   if (isWinner1()) {
    //     return 'player1';
    //   }
    //   if (isWinner2()) {
    //     return 'player2';
    //   }
    //   return null;
    //

  //
  // while (getWinner !== true) {
  //   startButton.innerText="Reset Game"
  // }
})
