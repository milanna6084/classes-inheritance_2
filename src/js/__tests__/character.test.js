import Character from '../character/Character';
import Swordsman from '../character/Swordsman';

describe('constructor Character', () => {
  test('test fails for invalid name', () => {
    try {
      const test = new Character('l', 'Swordsman');
      console.log(test);
    } catch (e) {
      expect(e.message).toEqual('Invalid name value');
    }
  });

  test('test fails for invalid type', () => {
    try {
      const test = new Character('Potter', 'Wizard');
      console.log(test);
    } catch (e) {
      expect(e.message).toEqual('Invalid type value');
    }
  });

  test('test not fails for valid name and type', () => {
    const test = new Character('Leon', 'Swordsman');

    expect(test).toBeDefined();
  });
});

const testCharacter = new Swordsman('test');
testCharacter.health = 0;

describe('levelUp function', () => {
  const testLevelUp = new Swordsman('test2');

  test('health less than equel zero, try catch error', () => {
    try {
      testCharacter.levelUp();
    } catch (e) {
      expect(e.message).toEqual('Health level is less than or equal to zero');
    }
  });

  test('increase level, attack, defence and health ', () => {
    const result = new Swordsman('test2');
    result.level = 2;
    result.attack = 48;
    result.defence = 12;
    result.health = 100;
    testLevelUp.levelUp();
    expect(testLevelUp).toEqual(result);
  });
});

describe('damaged function', () => {
  const testDamage = new Swordsman('test2');
  const points = 10;

  test('health less than equel zero, try catch error', () => {
    try {
      testCharacter.damage(points);
    } catch (e) {
      expect(e.message).toEqual('Health level is less than or equal to zero');
    }
  });

  test('health level should be decrease', () => {
    const result = new Swordsman('test2');
    result.health = 91;

    testDamage.damage(points);

    expect(testDamage).toEqual(result);
  });
});
