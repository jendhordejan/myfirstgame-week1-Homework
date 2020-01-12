// Write your JS here
// create an object hero{}
const hero = {name: 'XStriKeR',
              heroic: true,
              inventory: [],
              health: 10,
              weapon: {type: 'wooden sword', damage: 2}}
              ;

// game logic functions
function rest(person){
  person.health = 10;
  //alert popup if health property =10
  window.alert('Health has been replenished')
  return person
}

function pickUpItem(){

}

function equipWeapon(){

}
