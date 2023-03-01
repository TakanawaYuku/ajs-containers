import Team from '../team';

test('Adding the selected character to the team', () => {
  const team = new Team();
  team.add('Magician');

  expect(team.members.size).toBe(1);
});

test('Adding the selected character to the team', () => {
  const team = new Team();
  team.add('Magician');
  team.add('Daemon');

  expect(team.members.size).toBe(2);
});

test('Test error: adding two identical characters to the team', () => {
  expect(() => {
    const team = new Team();
    team.add('Magician');
    team.add('Magician');
  }).toThrow('This character already exists in the team!');
});

test('Adding an arbitrary number of characters', () => {
  const team = new Team();
  const characters = ['Magician', 'Daemon', 'Bowerman', 'Swordsman'];
  team.addAll([...characters, characters[0]]);
  expect(team.members.size).toBe(4);
});

test('Checking the toArray method', () => {
  const team = new Team();
  const characters = ['Magician', 'Daemon', 'Bowerman', 'Swordsman'];
  team.addAll(characters);
  expect(team.toArray()).toEqual(characters);
});
