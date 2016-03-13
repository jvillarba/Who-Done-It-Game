console.log('this is working')

var startButton = document.getElementById('start')
var resetButton = document.getElementById('reset')
var suspectCards = document.getElementsByClassName('suspect')
var weaponCards = document.getElementsByClassName('weapon')
var roomCards = document.getElementsByClassName('room')
var instructions = document.getElementById('instructions')
var backs = document.getElementsByClassName('back')
var cards = document.getElementsByClassName('card')

// HIDES ASSETS BEFORE GAME STARTS
var $players = $('.player')
$players.hide()
var $cards = $('.card')
$cards.hide()
var $resets = $('#reset')
$resets.hide()

var scarletImg = '<img class="suspect" src="images/Miss_Scarlett.png" id="scarlet" />'
var greenImg = '<img class="suspect" src="images/Mr_Green.png" id="green" />'
var plumImg = '<img class="suspect" src="images/Prof_Plum.png" id="plum" />'
var whiteImg = '<img class="suspect" src="images/Mrs_White.png" id="white" />'
var peacockImg = '<img class="suspect" src="images/Mrs_Peacock.png" id="peacock" />'
var mustardImg = '<img class="suspect" src="images/Col_Mustard.png" id="mustard" />'
var yvetteImg = '<img class="suspect" src="images/Yvette.png" id="yvette" />'
var candlestickImg = '<img class="weapon" src="images/candlestick.png" id="candlestick" />'
var pipeImg = '<img class="weapon" src="images/pipe.png" id="pipe" />'
// changed images
// var malletImg = '<img class="weapon" src="images/mallet.png" id="mallet" />'
// var statueImg = '<img class="weapon" src="images/statue.png" id="statue" />'
// var horseshoeImg = '<img class="weapon" src="images/horseshoe.png" id="horseshoe" />'
var revolverImg = '<img class="weapon" src="images/revolver.png" id="revolver" />'
var knifeImg = '<img class="weapon" src="images/knife.png" id="knife" />'
var ropeImg = '<img class="weapon" src="images/rope.png" id="rope" />'
var wrenchImg = '<img class="weapon" src="images/wrench.png" id="wrench" />'
var ballroomImg = '<img class="room" src="images/ballroom.png" id="ballroom" />'
var billiardImg = '<img class="room" src="images/billiard.png" id="billiard" />'
var conservatoryImg = '<img class="room" src="images/conservatory.png" id="conservatory" />'
var diningRoomImg = '<img class="room" src="images/diningRoom.png" id="diningRoom" />'
var kitchenImg = '<img class="room" src="images/kitchen.png" id="kitchen" />'
var libraryImg = '<img class="room" src="images/library.png" id="library" />'
var hallImg = '<img class="room" src="images/hall.png" id="hall" />'
var studyImg = '<img class="room" src="images/study.png" id="study" />'
var cardImg = '<img class="cardCl" src="images/card.png" id="cardId" />'

var pictures = [
  scarletImg, greenImg, plumImg, whiteImg, peacockImg, mustardImg, yvetteImg,
  candlestickImg, pipeImg, knifeImg, revolverImg, ropeImg, wrenchImg,
  ballroomImg, billiardImg, conservatoryImg, diningRoomImg, kitchenImg, libraryImg, studyImg, hallImg
]

var suspects = [
  {name: 'Miss Scarlet', id: 'scarlet'},
  {name: 'Mr Green', id: 'green'},
  {name: 'Professor Plum', id: 'plum'},
  {name: 'Mrs White', id: 'white'},
  {name: 'Mrs Peacock', id: 'peacock'},
  {name: 'Col Mustard', id: 'mustard'},
  {name: 'Yvette', id: 'yvette'}
]
var weapons = [
  {item: 'Candlestick', id: 'candlestick'},
  {item: 'Lead Pipe', id: 'pipe'},
  {item: 'Knife', id: 'knife'},
  {item: 'Revolver', id: 'revolver'},
  {item: 'Rope', id: 'rope'},
  {item: 'Wrench', id: 'wrench'}
]
var rooms = [
  {item: 'Ballroom', id: 'ballroom'},
  {item: 'Billiard', id: 'billiard'},
  {item: 'Conservatory', id: 'conservatory'},
  {item: 'Dining Room', id: 'diningRoom'},
  {item: 'Kitchen', id: 'kitchen'},
  {item: 'Library', id: 'library'},
  {item: 'Hall', id: 'hall'},
  {item: 'Study', id: 'study'}
]
var killer = {}
var playerGuess = {}

var game = {
  player1: {
      name: "Player One",
      // score: 0 ~ placeholder
  },
  player2: {
      name: "Player Two",
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
      $("#left").fadeTo(3000, 0.2);
      $("#right").css("opacity", 1.0);
//      console.log(currentPlayer)
  } else {
      currentPlayer = game.player1
      nextPlayer = game.player2
      $("#right").fadeTo(3000, 0.2);
      $("#left").css("opacity", 1.0);
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
var $instructions = $('#instructions')

// CLICKING START BUTTON
instructions.addEventListener('click', function(){
  console.log('1-start game now / instructions hide')
  $instructions.hide()
  $murderSound.play()
  $cover.fadeOut(4000)
  $("#right").css("opacity",0.1)
  setTimeout(function(){
    $resets.fadeIn()
    $cards.fadeIn(10000)
    $(".suspect").css("opacity",1)
  }, 10000)

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

// LAYS OUT THE CHOICES ON THE BOARD
  for (var i = 0; i < backs.length; i++) {
      fisherYates(pictures)
      backs[i].innerHTML = pictures.splice(0,1)
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
  $players.fadeIn(6000)
  $instructions.fadeIn(12000)
  instructions.innerHTML = currentPlayer.name + ", please pick a suspect"

  // PLAYER CHOOSES A SUSPECT
  for (var i = 0; i < suspectCards.length; i++) {
    suspectCards[i].addEventListener('click', function(){
      $sound1.play()
      console.log(this)
      playerGuess.suspect = (this.id)
      instructions.innerHTML = "Choose the killer's weapon"
      // console.log('asking for weapon')
      $(".suspect").css("opacity",0.2).off("click")
      $(".room").css("opacity",0.2).off("click")
      $(".weapon").css("opacity",1)
    })
  }
  // PLAYER CHOOSES A WEAPON
  // suspectCards[i].removeEventListener('click')
  for (var i = 0; i < weaponCards.length; i++) {
    weaponCards[i].addEventListener('click', function(){
      $sound2.play()
      console.log(this)
      playerGuess.weapon = (this.id)
      instructions.innerHTML = "Now, in which room..."
      // console.log('asking for room')
      $(".suspect").css("opacity",0.2)
      $(".weapon").css("opacity",0.2)
      $(".room").css("opacity",1)
    })
  }
  // PLAYER CHOOSES A ROOM
  for (var i = 0; i < roomCards.length; i++){
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

// FUNCTION TO DETERMINE A WINNER
  var getWinner = function() {
    if (playerGuess.suspect === killer.suspect.id &&
        playerGuess.weapon === killer.weapon.id &&
        playerGuess.room === killer.room.id)
    {
      instructions.innerHTML = "CONGRATULATIONS!"
      $players.hide()
      swal({
        title: currentPlayer.name + " is the winner!",
        text: "The killer was " + killer.suspect.name + ", who used the " + killer.weapon.item + " in the " + killer.room.item + ".",
        type: "success",
        // imageUrl: playerGuess.suspect+"Img"
        // imageUrl: playerGuess.weapon+"Img",
        // imageUrl: playerGuess.room+"Img"
      });
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
          title: "SWEET!",
          text: currentPlayer.name + " had two correct guesses.",
          timer: 3000,
          showConfirmButton: false
      });
      instructions.innerHTML = "Please pick a suspect, " + nextPlayer.name
      $(".room").css("opacity",0.2)
      $(".weapon").css("opacity",0.2)
      $(".suspect").css("opacity",1)
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
      swal({
          title: "NICE!",
          text: currentPlayer.name + " had one correct guess.",
          timer: 3000,
          showConfirmButton: false
      });
      instructions.innerHTML = "Please pick a suspect, " + nextPlayer.name
      $(".room").css("opacity",0.2)
      $(".weapon").css("opacity",0.2)
      $(".suspect").css("opacity",1)
    } else {
      // instructions.innerHTML = "Wrong guess!  Next player choose a suspect"
      swal({
        title: "SORRY",
        text: "All three guesses are wrong!  Is " +nextPlayer.name+ " ready to play?",
        type: "error",
        timer: 3000,
        showConfirmButton: false
        // confirmButtonText: "Cool"
      });
      instructions.innerHTML = "Please pick a suspect, " + nextPlayer.name
      $(".room").css("opacity",0.2)
      $(".weapon").css("opacity",0.2)
      $(".suspect").css("opacity",1)
    }
  }

// TESTING IF PUTTING THIS WILL ALLOW ME TO RESET
    // var pictures = [
    //   scarletImg, greenImg, plumImg, whiteImg, peacockImg, mustardImg, yvetteImg,
    //   candlestickImg, pipeImg, knifeImg, revolverImg, ropeImg, wrenchImg,
    //   ballroomImg, billiardImg, conservatoryImg, diningRoomImg, kitchenImg, libraryImg, studyImg, hallImg
    // ]

// FLIP FUNCTION
$(function (){
  $(".card").flip({
    trigger: "hover"
  })
})

// BUTTON TO RESET GAME
resetButton.addEventListener('click', function(){
  location.reload();
})
