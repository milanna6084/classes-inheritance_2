import { checkName, checkType } from '../validatior';

export default class Character {
  constructor(name, type) {
    if (checkName(name)) {
      this.name = name;
    } else {
      throw new Error('Invalid name value');
    }

    if (checkType(type)) {
      this.type = type;
    } else {
      throw new Error('Invalid type value');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Health level is less than or equal to zero');
    }

    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Health level is less than or equal to zero');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
