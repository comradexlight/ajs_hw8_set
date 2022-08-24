import Team from '../team';
import Character from '../character';

test('Positive test of the Team class constructor', () => {
  const team = new Team();
  expect(team instanceof Team).toBe(true);
});

test('Positive test of the Team class constructor', () => {
  const team = new Team();
  expect(team.members instanceof Set).toBe(true);
});

test('Positive test of the add method of the Team class', () => {
  const team = new Team();
  const char = new Character('Имя', 'Swordsman');
  team.add(char);
  expect(team.members.has(char)).toBe(true);
});

test('Negative test of the add method of the Team class', () => {
  const team = new Team();
  const char = new Character('Имя', 'Swordsman');
  team.add(char);

  expect(() => {
    team.add(char);
  })
    .toThrow(Error('Этот персонаж уже в команде'));
});

test('Negative test of the addAll method of the Team class', () => {
  const team = new Team();
  const char1 = new Character('Имя1', 'Swordsman');
  const char2 = new Character('Имя2', 'Bowman');
  expect(() => {
    team.addAll(char1, char2, char1);
  })
    .toThrow(Error('Этот персонаж уже в команде'));
});

test('Positive test of the addAll method of the Team class', () => {
  const team = new Team();
  const char1 = new Character('Имя1', 'Swordsman');
  const char2 = new Character('Имя2', 'Bowman');
  team.addAll(char1, char2);
  expect(team.members.has(char1) && team.members.has(char2)).toBe(true);
});

test('Positive test of the toArray method of the Team class', () => {
  const team = new Team();
  const char1 = new Character('Имя1', 'Swordsman');
  const char2 = new Character('Имя2', 'Bowman');
  team.addAll(char1, char2);
  expect(team.toArray()).toEqual([{
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Имя1', type: 'Swordsman',
  }, {
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Имя2', type: 'Bowman',
  }]);
});
