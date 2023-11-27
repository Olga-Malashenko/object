export default function showAttack(obj) {
  const arr = [];
  let i = 0;
  for (const element of obj.special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = element;
    arr[i] = [id, name, description, icon];
    i++;
  }
  return arr;
}
