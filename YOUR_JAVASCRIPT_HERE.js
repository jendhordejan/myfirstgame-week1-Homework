// Write your JS here
// create an object hero{}
const hero = {name: 'XStriKeR',
              heroic: true,
              inventory: [{type: 'wooden sword', damage: 2},{type: 'Sword', damage: 5}],
              health: 10,
              weapon: {type: 'wooden sword', damage: 2}}
              ;
// document.body.onload = addElement;

function displaystats(person){
  //display name : hero.name
  const nameEle = document.getElementById("heroName");
  nameEle.innerHTML= `Name  :   ${person.name}`;

  //display health : hero.health
  const healthEle = document.getElementById("heroHealth")
  healthEle.innerHTML= `Health :    ${person.health} / 10`

  //display name : hero.name
  const weapEle = document.getElementById("heroWeapon");
  weapEle.innerHTML= `Weapon  :   ${person.weapon.type} - ${person.weapon.damage}`;

  //display inventory list
  const invtSection = document.getElementById("inventory");
  
  //loop inside inventory then display
  for (index = 0; index < person.inventory.length; index++){
    const divWeap = document.createElement("div")
    divWeap.setAttribute("id", index)
    divWeap.innerHTML = `* ${person.inventory[index].type} - ${person.inventory[index].damage}`;
    invtSection.appendChild(divWeap);
  }
}

displaystats(hero);



// function addElement () { 
//   // create a new div element 
//   var newDiv = document.createElement("div"); 
//   // and give it some content 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }
              
console.log(Object.keys(hero).length)
// game logic functions
function rest(person){
  person.health = 10;
  
  //alert popup if health property =10
  window.alert('Health has been replenished');
  return person
}

function pickUpItem(){

}

function equipWeapon(){

}


