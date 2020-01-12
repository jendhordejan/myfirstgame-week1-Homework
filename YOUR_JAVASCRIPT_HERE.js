// Write your JS here
// create an object hero{}
const hero = {name: 'XStriKeR',
              heroic: true,
              inventory: [],
              health: 10,
              weapon: {type: 'wooden sword', damage: 2}};


const monst1 = {name: 'goblin',
                heroic: false,
                health: 5,
                weapon: {type: 'club', damage: 1},
                itemDrop: {type: 'club', damage: 1},
                winChant: 'Gobel! Gobel!'
};

const monst2 = {name: 'imp',
                heroic: false,
                health: 5,
                weapon: {type: 'claw', damage: 2},
                itemDrop: {type: 'claw', damage: 2},
                winChant: 'EEEEEEK! EEEK!'
};

const monst3 = {name: 'Reijn',
                heroic: false,
                health: 500,
                weapon: {type: 'claw', damage: 2},
                itemDrop: {type: 'claw', damage: 2},
                winChant: 'You are not Strong and Independent and skillful enough to beat me! bwahaha'
};

const monsterList = [monst1, monst2, monst3];
let selectedMonster ={};

let skipInventoryLoad = false;
let allowChangeHeroName = true;

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

function getRandomMonster(monsters){
  // let mon = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
  // 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];
  selectedMonster = monsters[Math.floor(Math.random() * monsters.length)];
  return selectedMonster;
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
  pickUpItem(pickDagger);
})

//triggers when bag image is clicked
const isBagClicked = document.getElementById("bag");

isBagClicked.addEventListener('click', event => {
  //call equipWeapon function
  equipWeapon();
})

//triggers when hunt image is clicked
const isHuntClicked = document.getElementById("hunt");
isHuntClicked.addEventListener('click', event => {
  //call random monsters
  getRandomMonster(monsterList);
  console.log(getRandomMonster);
})


//change Hero Name function
function changeHeroName() {
  var heroName = prompt("Please enter your new hero name. This feature is only available once.", hero.name);
  if (heroName != null) {
    hero.name = heroName;
    displaystats(hero);

    allowChangeHeroName=false;
    
    const btnChangeName = document.getElementById("changeName");
    btnChangeName.setAttribute("disabled", false);
  }
}