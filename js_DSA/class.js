class Character { 
    constructor(name, weapon) { 
    this.name = name; 
    this.weapon = weapon; 
    } 
    attack() { 
    return `attack with ${this.weapon}`; 
    } 
   } 
   class Elf extends Character { 
    constructor(name, weapon, type) { 
    super(name, weapon); 
    // pulls in name and weapon from Character
    this.type = type; 
    } 
   } 
   class Ogre extends Character { 
    constructor(name, weapon, color) { 
    super(name, weapon); 
    this.color = color; 
    } 
    enrage() { 
    return `double attack power`; 
    } 
   } 
   const legolas = new Elf("Legolas", "high", "bow"); 
   const gruul = new Ogre("Gruul", "club", "gray"); 
   legolas.attack(); // attack with bow
   gruul.enrage(); // double attack power
   gruul.attack(); // attack with club
   legolas instanceof Elf; //true
   gruul instanceof Ogre; //tru