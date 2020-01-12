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
                winChant: 'Gobel! Gobel!',
                imgSrc: 'images/imp.jpeg'
};

const monst2 = {name: 'imp',
                heroic: false,
                health: 5,
                weapon: {type: 'claw', damage: 2},
                itemDrop: {type: 'claw', damage: 2},
                winChant: 'EEEEEEK! EEEK!',
                imgSrc: 'images/imp.jpeg'
};

const monst3 = {name: 'Ancient Codeisseur Instructor (Reijn)',
                heroic: false,
                health: 500,
                weapon: {type: 'Sword of Revealing Bug', damage: 500},
                itemDrop: {type: 'Enchanted Codes', damage: 500},
                winChant: 'You are not Strong and Independent and skillful enough to beat me! bwahaha',
                imgSrc: 'images/Reijn.jpeg'
};

const monst4 = {name: 'Ancient Codeisseur Instructor (Kelly)',
                heroic: false,
                health: 500,
                weapon: {type: 'Magestic Recipe Book', damage: 500},
                itemDrop: {type: 'Enchanted Codes', damage: 500},
                winChant: 'OMG! What am I doing?... whatever...',
                imgSrc: 'images/Kelly.jpeg'
};

const monst5 = {name: 'Ancient Codeisseur Instructor (David)',
                heroic: false,
                health: 500,
                weapon: {type: 'Claws of Games', damage: 500},
                itemDrop: {type: 'Enchanted Codes', damage: 500},
                winChant: 'TIK-TIK-TIK...You are no match for my speed!',
                imgSrc: 'images/David.jpeg'
};

const monsterList = [monst1, monst2, monst3, monst4, monst5];
let selectedMonster ={};

let skipInventoryLoad = false;
let allowChangeHeroName = true;
var divBattle = document.getElementById("battleArea");

function setGameInit(){
  divBattle.style.display = "none"
  displaystats(hero);
}

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

function displayMonsterStats(monster){
  const monsterImgEle = document.getElementById("monsterImage")
  monsterImgEle.setAttribute("src", monster.imgSrc);
  
  //display name : hero.name
  const monsterNameEle = document.getElementById("monsterName");
  monsterNameEle.innerHTML= `Name  :   ${monster.name}`;

  //display health : hero.health
  const monsterHealthEle = document.getElementById("monsterHealth")
  monsterHealthEle.innerHTML= `Health :    ${monster.health}`

  //display name : hero.name
  const monsterWeapEle = document.getElementById("monsterWeapon");
  monsterWeapEle.innerHTML= `Weapon  :   ${monster.weapon.type} - ${monster.weapon.damage}`;

}

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

function initBattle() {
  
  if (divBattle.style.display === "none") {
    divBattle.style.display = "block";
  } else {
    divBattle.style.display = "none";
  }
}

setGameInit();

function attack(){
  let atkDmg = hero.weapon.damage;
  selectedMonster.health=selectedMonster.health-atkDmg;
  if (selectedMonster.health>0){
    window.alert(`${selectedMonster.name} takes -${atkDmg}`);
    displayMonsterStats(selectedMonster);

    monsterAttack();
  } else {
    window.alert('You WIN! Great Job!');
    divBattle.style.display = "none"
    return;
  }
}

function monsterAttack(){
  let atkDmg = selectedMonster.weapon.damage;
  hero.health=hero.health-atkDmg;
  if (hero.health>0){
    window.alert(`you take -${atkDmg} from ${selectedMonster.name}`);
    displaystats(hero);
  } else {
    window.alert(`${selectedMonster.name} says: ${selectedMonster.winChant}...YOU LOOSE! Try Again.`)
    hero.health = 0;
    displaystats(hero);
    divBattle.style.display = "none"
    return;
  }
}


const isAtkBtnClicked = document.getElementById("attack");
isAtkBtnClicked.addEventListener('click', event => {
  //initiate attack sequence...
  attack();
})

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
  displayMonsterStats(selectedMonster);
  initBattle();
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