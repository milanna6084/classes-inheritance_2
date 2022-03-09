// TODO: write your code here

import Swordsman from './character/Swordsman';
import Bowerman from './character/Bowerman';
import Daemon from './character/Daemon';
import Zombie from './character/Zombie';
import Magician from './character/Magician';
import Undead from './character/Undead';

const bowerman = new Bowerman('Legolas', 'Bowerman');
const swordman = new Swordsman('Aragorn', 'Swordsman');
const daemon = new Daemon('Balrog', 'Daemon');
const undead = new Undead('', 'Undead');
const zombie = new Zombie('Shaun', 'Zombie');
const wizard = new Magician('Gandalf', 'Magician');

console.log(bowerman, swordman, daemon, zombie, undead, wizard);

/*  bowerman.attack = 80;
bowerman.health = 20;
bowerman.defence = 50;
bowerman.level = -1;

swordman.attack = 0;
swordman.health = -10;
swordman.defence = 100;

daemon.attack = 0.8;
daemon.health = 200;
daemon.defence = 0;
daemon.level = 2;

zombie.attack = 0;
zombie.level = 0;
zombie.defence = 0;
zombie.health = 0;

wizard.attack = 30;
wizard.level = 10;
wizard.defence = -20;
wizard.health = 1;

const allWarriors = [bowerman, swordman, daemon, zombie, undead, wizard];
export default allWarriors; */
