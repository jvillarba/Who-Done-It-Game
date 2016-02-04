console.log('this is working')

var startButton = document.getElementById('start')
var suspectCards = document.getElementsByClassName('suspect')
var weaponCards = document.getElementsByClassName('weapon')
var roomCards = document.getElementsByClassName('room')
var instructions = document.getElementById('instructions')
var boxes = document.getElementsByClassName('box')

var $players = $('.player')
$players.hide()

var scarletImg = '<img class="suspect" src="images/Miss_Scarlett.png" id="scarlet" />'
var greenImg = '<img class="suspect" src="images/Mr_Green.png" id="green" />'
var plumImg = '<img class="suspect" src="images/Prof_Plum.png" id="plum" />'
var whiteImg = '<img class="suspect" src="images/Mrs_White.png" id="white" />'
var peacockImg = '<img class="suspect" src="images/Mrs_Peacock.png" id="peacock" />'
var mustardImg = '<img class="suspect" src="images/Col_Mustard.png" id="mustard" />'
var candlestickImg = '<img class="weapon" src="images/candlestick.png" id="candlestick" />'
var pipeImg = '<img class="weapon" src="images/pipe.png" id="pipe" />'
var malletImg = '<img class="weapon" src="images/mallet.png" id="mallet" />'
var gunImg = '<img class="weapon" src="images/gun.png" id="gun" />'
var statueImg = '<img class="weapon" src="images/statue.png" id="statue" />'
var horseshoeImg = '<img class="weapon" src="images/horseshoe.png" id="horseshoe" />'
var ballroomImg = '<img class="room" src="images/ballroom.png" id="ballroom" />'
var billiardImg = '<img class="room" src="images/billiard.png" id="billiard" />'
var conservatoryImg = '<img class="room" src="images/conservatory.png" id="conservatory" />'
var diningRoomImg = '<img class="room" src="images/diningRoom.png" id="diningRoom" />'
var kitchenImg = '<img class="room" src="images/kitchen.png" id="kitchen" />'
var libraryImg = '<img class="room" src="images/library.png" id="library" />'
var cardImg = '<img class="cardCl" src="images/card.png" id="cardId" />'

var pictures = [
  scarletImg, greenImg, plumImg, whiteImg, peacockImg, mustardImg,
  candlestickImg, pipeImg, malletImg, gunImg, statueImg, horseshoeImg,
  ballroomImg, billiardImg, conservatoryImg, diningRoomImg, kitchenImg, libraryImg
]
var suspects = [
  {name: 'Miss Scarlet', id: 'scarlet'},
  {name: 'Mr Green', id: 'green'},
  {name: 'Professor Plum', id: 'plum'},
  {name: 'Mrs White', id: 'white'},
  {name: 'Mrs Peacock', id: 'peacock'},
  {name: 'Col Mustard', id: 'mustard'}
]
var weapons = [
  {item: 'Candlestick', id: 'candlestick'},
  {item: 'Lead Pipe', id: 'pipe'},
  {item: 'Mallet', id: 'mallet'},
  {item: 'Gun', id: 'gun'},
  {item: 'Statuette', id: 'statue'},
  {item: 'Horseshoe', id: 'horseshoe'}
]
var rooms = [
  {item: 'Ballroom', id: 'ballroom'},
  {item: 'Billiard', id: 'billiard'},
  {item: 'Conservatory', id: 'mallet'},
  {item: 'Dining Room', id: 'diningRoom'},
  {item: 'Kitchen', id: 'kitchen'},
  {item: 'Library', id: 'library'}
]
var killer = {}
var playerGuess = {}

var game = {
  player1: {
      name: "Player 1",
      // score: 0 ~ placeholder
  },
  player2: {
      name: "Player 2",
      // score: 0 ~ placeholder
  }
}

// FROM BRYAN FROM PHILIPPE HOW TO SWITCH BETWEEN PLAYERS
var currentPlayer = game.player1

function switchTurn(){
  if(currentPlayer == game.player1){
      currentPlayer = game.player2
      $("#right").css("opacity", 1.0);
      $("#left").css("opacity", 0.5);
//      console.log(currentPlayer)
  } else {
      currentPlayer = game.player1
      $("#left").css("opacity", 1.0);
      $("#right").css("opacity", 0.5);
//      console.log(currentPlayer)
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

  $players.show(200)
  $('#right').css("opacity",0.5)


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

// COMPUTER RANDOMLY PICKS KILLER, WEAPON, AND ROOM
  killer.suspect = suspects[Math.floor(Math.random() * suspects.length)]
  killer.weapon = weapons[Math.floor(Math.random() * weapons.length)]
  killer.room = rooms[Math.floor(Math.random() * rooms.length)]

// PLAYER CHOOSES A SUSPECT
  instructions.innerHTML = "Please pick a suspect"
// console.log('asking for suspect')
$('.suspect').css("opacity", 1)

// DISPLAYS KILLER
  console.log(killer)

  for (var i = 0; i < suspectCards.length; i++) {
      // $(".suspect").css("opacity", 1.0)
      suspectCards[i].addEventListener('click', function(){
      playerGuess.suspect = (this.id)
      instructions.innerHTML = "What weapon did they use?"
// console.log('asking for weapon')
      $('.suspect').css("opacity",0.4)
      $('.weapon').css("opacity",1)
      })
  }
  // if (this.id === killer.suspect.id) {
  //   return
  // }
  //   console.log('wrong. try again')

// PLAYER CHOOSES A WEAPON
  for (var i = 0; i < weaponCards.length; i++) {
      // $(".weapon").css("opacity", 1.0)
      weaponCards[i].addEventListener('click', function(){
      playerGuess.weapon = (this.id)
      instructions.innerHTML = "Now, in which room?"
// console.log('asking for room')
      $('.weapon').css("opacity",0.4)
      $('.room').css("opacity",1)
      })
  }

// PLAYER CHOOSES A ROOM
  for (var i = 0; i < roomCards.length; i++){
      // $(".room").css("opacity", 1.0)
      roomCards[i].addEventListener('click', function(){
      playerGuess.room = (this.id)
      $('.room').css("opacity",0.4)
      getWinner()
      switchTurn()
      })
  }
  // if (this.id === killer.weapon.id) {
  //   console.log('right weapon')
  //   return
  // }
  //   console.log('wrong. try again')

// FUNCTION TO DETERMINE A WINNER
  var getWinner = function() {
      if (playerGuess.suspect === killer.suspect.id &&
          playerGuess.weapon === killer.weapon.id &&
          playerGuess.room === killer.room.id)
    {
      instructions.innerHTML = "WE HAVE A WINNER!"
    } else if ((playerGuess.suspect === killer.suspect.id &&
          playerGuess.weapon === killer.weapon.id &&
          playerGuess.room !== killer.room.id) || (
          playerGuess.suspect !== killer.suspect.id &&
          playerGuess.weapon === killer.weapon.id &&
          playerGuess.room === killer.room.id) || (
          playerGuess.suspect === killer.suspect.id &&
          playerGuess.weapon !== killer.weapon.id &&
          playerGuess.room === killer.room.id))
    {
      instructions.innerHTML = currentPlayer.name+ " had 2 guesses correct."

    } else if ((playerGuess.suspect === killer.suspect.id &&
          playerGuess.weapon !== killer.weapon.id &&
          playerGuess.room !== killer.room.id) || (
          playerGuess.suspect !== killer.suspect.id &&
          playerGuess.weapon === killer.weapon.id &&
          playerGuess.room !== killer.room.id) || (
          playerGuess.suspect !== killer.suspect.id &&
          playerGuess.weapon !== killer.weapon.id &&
          playerGuess.room === killer.room.id))
    {
      instructions.innerHTML = currentPlayer.name+ " had 1 guess correct."

    } else {
          instructions.innerHTML = "Wrong!  Next player choose a suspect"
          $('.suspect').css("opacity",1)
    }
  }

// TESTING IF PUTTING THIS WILL ALLOW ME TO RESET
    // var pictures = [
    //     scarletImg, greenImg, plumImg, whiteImg, peacockImg, mustardImg,
    //     candlestickImg, pipeImg, malletImg, gunImg, statueImg, horseshoeImg,
    //     ballroomImg, billiardImg, conservatoryImg, diningRoomImg, kitchenImg, libraryImg
    // ]

  //
  // while (getWinner !== true) {
  //   startButton.innerText="Reset Game"
  // }
})
