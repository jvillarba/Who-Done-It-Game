console.log('this is working')

var x = document.getElementsByClassName('box')
var c = document.getElementsByClassName('startReset')

var suspects = [
  {name: 'Miss Scarlett'},
  {name: 'Mr Green'},
  {name: 'Professor Plum'},
  {name: 'Mrs White'}
]
var weapons = [
  {item: 'candlestick'},
  {item: 'lead pipe'},
  {item: 'mallet'},
  {item: 'gun'}
]
var killer = []

// pressing "Reset"
for (var i = 0; i < c.length; i++) {
  c[i].addEventListener('click', function(){
    console.log('reset game now')
  })
}



// var game {
//   console.log('starting game now')
//   cardImg: '<img class="card" src="images/card.png" alt="" />',
//   boxes: document.querySelectorAll(".box"),
//
// '<img class="suspect" src="images/Mr_Green.png" alt="Green"/>'
// '<img class="suspect" src="images/Miss_Scarlett.png" alt="Scarlett"/>'
// '<img class="suspect" src="images/Prof_Plum.png" alt="Plum"/>'
// '<img class="weapon" src="images/mallet.png" alt="mallet"/>'
// '<img class="weapon" src="images/pipe.png" alt="pipe"/>'
// '<img class="weapon" src="images/candlestick.png" alt="candlestick"/>'
//
//   init: function(){
//      game.boxes[game.boxes.length].innerHTML = game.cardImg
//
//      for (var counter = 0; counter < game.boxes.length; counter += 1) {
//        game.boxes[counter].addEventListener("click", game.checkGuess)
//      }
//    },
//
//   pickRandomNumber: function(upperLimit){
//     return Math.floor(Math.random() * upperLimit)
//   },
//
//
// }
// game.init()
