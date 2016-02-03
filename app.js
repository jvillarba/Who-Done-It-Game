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

// pressing "Reset"
startButton.addEventListener('click', function(){
  console.log('reset game now')

// randomizes pictures
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

// // random generator
//     function pickRandom(x){
//       x = Math.floor(Math.random() * boxes.length)
//       return x
//     }
// lays out the choices -- need to work on not overlapping
    for (var i = 0; i < boxes.length; i++) {
      fisherYates(pictures)
      boxes[i].innerHTML = pictures.splice(0,1)
    }

// clears killer variable
  killer = {}

// computer randomly picks a killer and a weapon
  killer.suspect = suspects[Math.floor(Math.random() * suspects.length)]
  killer.weapon = weapons[Math.floor(Math.random() * weapons.length)]

  instructions.innerHTML = "Who do you think did it?"

// console.log(killer)
  console.log(killer)

  for (var i = 0; i < suspectCards.length; i++) {
    suspectCards[i].addEventListener('click', function(){
    playerGuess.suspect = (this.id)
    instructions.innerHTML = "You chose " + playerGuess.suspect +". Now what weapon did they use."

    // if (this.id === killer.suspect.id) {
    //   console.log('you got em')
    //   return
    // }
    //   console.log('wrong. try again')
    })
  }

  for (var i = 0; i < weaponCards.length; i++) {
    weaponCards[i].addEventListener('click', function(){
    playerGuess.weapon = (this.id)
    instructions.innerHTML = "You chose the " + playerGuess.weapon
    // if (this.id === killer.weapon.id) {
    //   console.log('right weapon')
    //   return
    // }
    //   console.log('wrong. try again')
    })
  }



  // if (playerGuess.suspect === killer.suspect.id && playerGuess.weapon === killer.weapon.id){
  //   instructions.innerHTML = "You win"
  // } else if ((playerGuess.suspect === killer.suspect.id && playerGuess.weapon !== killer.weapon.id) || (playerGuess.suspect !== killer.suspect.id && playerGuess.weapon === killer.weapon.id)){
  //   instructions.innerHTML = "You have one right"
  // } else {
  //   instructions.innerHTML = "Sorry, try again"
  //   }
  //
})
