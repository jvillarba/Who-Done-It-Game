console.log('this is working')

var startButton = document.getElementById('start')
var suspectCards = document.getElementsByClassName('suspect')
var weaponCards = document.getElementsByClassName('weapon')
var instructions = document.getElementById('instructions')

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

  // clearing killer variable
  killer = {}

  // computer randomly picks a killer and a weapon
  killer.suspect = suspects[Math.floor(Math.random() * suspects.length)]
  killer.weapon = weapons[Math.floor(Math.random() * weapons.length)]

  instructions.innerHTML = "Please pick a suspect."

  // console.log(killer)
  console.log(killer)

  for (var i = 0; i < suspectCards.length; i++) {
    suspectCards[i].addEventListener('click', function(){
    playerGuess.suspect = (this.id)
    instructions.innerHTML = 'You chose ' + playerGuess.suspect +'. Now choose the weapon.'

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
    // if (this.id === killer.weapon.id) {
    //   console.log('right weapon')
    //   return
    // }
    //   console.log('wrong. try again')
    })
  }


  })
  function winner(){
  if (playerGuess.suspect === killer.suspect.id && playerGuess.weapon === killer.weapon.id){
    console.log(playerGuess.suspect)
    console.log(playerGuess.weapon)
  } else if (playerGuess.suspect === killer.suspect.id && playerGuess.weapon !== killer.weapon.id){
    console.log(playerGuess.suspect)
    console.log(playerGuess.weapon)
  } else if (playerGuess.suspect !== killer.suspect.id && playerGuess.weapon === killer.weapon.id){
    console.log(playerGuess.suspect)
    console.log(playerGuess.weapon)
  } else {
    console.log(playerGuess.suspect)
    console.log(playerGuess.weapon)
    }
  }
  winner()
