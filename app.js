console.log('this is working')

var startButton = document.getElementById('start')
var resetButton = document.getElementById('reset')
var suspectCards = document.getElementsByClassName('suspect')
var weaponCards = document.getElementsByClassName('weapon')
var roomCards = document.getElementsByClassName('room')
var instructions = document.getElementById('instructions')
var boxes = document.getElementsByClassName('box')

// HIDES ASSETS BEFORE GAME STARTS
var $players = $('.player')
$players.hide()
var $spacers = $('.spacer')
$spacers.hide()
var $boxes = $('.box')
$boxes.hide()
var $resets = $('#reset')
$resets.hide()

// var $starts = $('#start') ~ NOT NEEDED WITH NEW LOCATION

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
  {item: 'Conservatory', id: 'conservatory'},
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
var nextPlayer = game.player2

function switchTurn(){
  if(currentPlayer == game.player1){
      currentPlayer = game.player2
      nextPlayer = game.player1
      $("#right").css("opacity", 1.0);
      $("#left").fadeTo(3000, 0.2);
//      console.log(currentPlayer)
  } else {
      currentPlayer = game.player1
      nextPlayer = game.player2
      $("#left").css("opacity", 1.0);
      $("#right").fadeTo(3000, 0.2);
//      console.log(currentPlayer)
  }
  return currentPlayer
}

// SOUND FILES
var $murderSound = $('#murderSnd')[0]
var $sound1 = $('#suspectSnd')[0]
var $sound2 = $('#weaponSnd')[0]
var $sound3 = $('#roomSnd')[0]
var $taDa = $('#taDaSnd')[0]

// GAME START ANIMATION FILE
var $cover = $('#cover')

// CLICKING START BUTTON
instructions.addEventListener('click', function(){
  console.log('start game now')
  $murderSound.play()
  $spacers.show()
  setTimeout(function(){
    $cover.fadeOut(1000)
    $resets.fadeIn()
    $boxes.fadeIn()
    $('.suspect').css("opacity",1)
    $('#right').css("opacity",0.2)
    $spacers.fadeOut(3000)

  // $starts.hide() ~ NOT NEEDED WITH NEW LOCATION

}, 7000)

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

// instructions.innerHTML = ""

// DISPLAYS KILLER
  console.log(killer)
  $players.fadeIn(5000)
  instructions.innerHTML = "Please pick a suspect, " + currentPlayer.name

// PLAYER CHOOSES A SUSPECT
  for (var i = 0; i < suspectCards.length; i++) {
      suspectCards[i].addEventListener('click', function(){
      $sound1.play()
      console.log(this)
      // if ($(this).hasClass("suspect")) {
        playerGuess.suspect = (this.id)
      // } else {
      //   instructions.innerHTML = "Wrong choice. Please select a suspect."
      // }

      instructions.innerHTML = "Choose the killer's weapon"
// console.log('asking for weapon')
      $('.suspect').css("opacity",0.2)
      $('.room').css("opacity",0.2)
      $('.weapon').css("opacity",1)

      // PLAYER CHOOSES A WEAPON
        for (var i = 0; i < weaponCards.length; i++) {
            // $(".weapon").css("opacity", 1.0)
            weaponCards[i].addEventListener('click', function(){
              $sound2.play()
              console.log(this)
            playerGuess.weapon = (this.id)
            instructions.innerHTML = "Now, in which room..."
      // console.log('asking for room')
            $('.suspect').css("opacity",0.2)
            $('.weapon').css("opacity",0.2)
            $('.room').css("opacity",1)

            // PLAYER CHOOSES A ROOM
              for (var i = 0; i < roomCards.length; i++){
                  // $(".room").css("opacity", 1.0)
                  roomCards[i].addEventListener('click', function(){
                    $sound3.play()
                    console.log(this)
                  playerGuess.room = (this.id)
                  $('.room').css("opacity",0.2)
                  console.log(playerGuess)
                  getWinner()
                  switchTurn()
                  })
              }
            })
        }
      })
  }

// FUNCTION TO DETERMINE A WINNER
  var getWinner = function() {
      if (playerGuess.suspect === killer.suspect.id &&
          playerGuess.weapon === killer.weapon.id &&
          playerGuess.room === killer.room.id)
    {
      instructions.innerHTML = "CONGRATULATIONS!"
      swal(
          "We have a winner!"
      )
      $taDa.play()
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
      // instructions.innerHTML = "Wow! " +currentPlayer.name+ " had two correct guesses."
      swal({
          title: "Wow! Two correct guesses.",
          timer: 3000,
          showConfirmButton: false
      });
      instructions.innerHTML = "Please pick a suspect, " + nextPlayer.name
      $('.suspect').css("opacity",1)
      $('.room').css("opacity",0.2)
      $('.room').css("opacity",0.2)
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
      // instructions.innerHTML = "Nice... " +currentPlayer.name+ " had one correct guess."
      instructions.innerHTML = "Please pick a suspect, " + nextPlayer.name
      swal({
          title: "Nice! One correct guess.",
          timer: 3000,
          showConfirmButton: false
      });
      $('.suspect').css("opacity",1)
      $('.room').css("opacity",0.2)
      $('.room').css("opacity",0.2)
    } else {
      // instructions.innerHTML = "Wrong guess!  Next player choose a suspect"
      instructions.innerHTML = "Please pick a suspect, " + nextPlayer.name
      swal({
          title: "All three guesses are wrong!",
          timer: 3000,
          showConfirmButton: false
      });
      $('.suspect').css("opacity",1)
      $('.room').css("opacity",0.2)
      $('.room').css("opacity",0.2)
    }
  }

// TESTING IF PUTTING THIS WILL ALLOW ME TO RESET
    // var pictures = [
    //     scarletImg, greenImg, plumImg, whiteImg, peacockImg, mustardImg,
    //     candlestickImg, pipeImg, malletImg, gunImg, statueImg, horseshoeImg,
    //     ballroomImg, billiardImg, conservatoryImg, diningRoomImg, kitchenImg, libraryImg
    // ]

})

// BUTTON TO RESET GAME
resetButton.addEventListener('click', function(){
  location.reload();
})
