// Write your JS here
// create an object hero{}
const hero = {name: 'XStriKeR',
              heroic: true,
              inventory: [],
              health: 10,
              weapon: {type: 'wooden sword', damage: 2}}
              ;
// document.body.onload = addElement;

let skipInventoryLoad = false;

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
  if (!skipInventoryLoad){
      for (index = 0; index < person.inventory.length; index++){
        const divWeap = document.createElement("div")
        divWeap.setAttribute("id", index)
        divWeap.innerHTML = `* ${person.inventory[index].type} - ${person.inventory[index].damage}`;
        invtSection.appendChild(divWeap);
        skipInventoryLoad=false;
      }
    }
}

displaystats(hero);

              
console.log(Object.keys(hero).length)
// game logic functions
function rest(person){
  person.health = 10;
  
  //alert popup if health property =10
  window.alert('Health has been replenished');
  displaystats(hero)
  return person
}

function pickUpItem(item){
//used when clicking the 'dagger' image
//Adds the weapon object as the last element of the inventory array of person
  hero.inventory[hero.inventory.length] = item;
  displaystats(hero);
}

function equipWeapon(){
//When the bag is clicked it will equip the hero with the first item in ..
//the inventory array
  const firstInvWeapon = hero.inventory[0];
  hero.weapon = firstInvWeapon;
  skipInventoryLoad=true;
  displaystats(hero)
}

//triggers when inn image is clicked
const isInnClicked = document.getElementById("inn");

isInnClicked.addEventListener('click', event => {
  //call rest function
  rest(hero);
})

//triggers when dagger image is clicked
const isDaggerClicked = document.getElementById("dagger");

isDaggerClicked.addEventListener('click', event => {
  //call pickUpItem function
  const pickDagger = {type: 'dagger', damage: 2}
  console.log('dagger is clicked');
  pickUpItem(pickDagger);

})

//triggers when bag image is clicked
const isBagClicked = document.getElementById("bag");

isBagClicked.addEventListener('click', event => {
  //call equipWeapon function
  equipWeapon();
})
