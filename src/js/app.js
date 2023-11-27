// TODO: write your code here
/*import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default function propSort(obj, sortOrder) {
  // some logics
  let propSorted = [];
  let arr = [];
  
  for (const property in obj) {
    arr.push(property);
    for (let i = 0; i < sortOrder.length; i++) {
      if (property === sortOrder[i]) {
        propSorted[i] = {
          key: property,
          value: obj[property],
        };
        arr.splice(arr.indexOf(property), 1);
      }
    }
  }
  // сортировка подмассива методом sort
  const newArr = arr.sort();
  // помещение в массив, начиная с sortOrder.lenght
 
  for (let i = sortOrder.length; i < (sortOrder.length + newArr.length); i++) {
    propSorted[i] = {
      key: newArr[i - sortOrder.length],
      value: obj[newArr[i - sortOrder.length]],
    };
  }
  return propSorted;
}

