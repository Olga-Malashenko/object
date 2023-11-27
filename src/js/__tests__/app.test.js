import showAttack from '../app';

test('Should be array', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const result = showAttack(character);
  const expected = [
    [8, 'Двойной выстрел', 'Двойной выстрел наносит двойной урон', 'http://...'],
    [9, 'Нокаутирующий удар', 'Описание недоступно', 'http://...'],
  ];
  expect(result).toEqual(expected);
});
