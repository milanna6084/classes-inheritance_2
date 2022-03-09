export function checkName(name) {
  if ((typeof name === 'string') && (name.length >= 2 && name.length <= 10)) {
    return true;
  }
  return false;
}

export function checkType(type) {
  const allowedTypes = ['Bowerman', 'Swordsman', 'Undead', 'Zombie', 'Magician', 'Daemon'];
  if (allowedTypes.includes(type)) {
    return true;
  }
  return false;
}
