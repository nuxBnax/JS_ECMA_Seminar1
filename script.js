// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]


// mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
function mergeArrays(arr1, arr2) {
    // arr1, arr2 параметры функции
    return [...arr1, ...arr2];
}

const array = [1, 2, 3];
const array2 = [4, 5, 6];
// аргумент это то что передается внутрь функцию

console.log(mergeArrays(array, array2));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5]

// function removeDuplicates(...rest) {
//     return rest.filter((element, index) => rest.indexOf(element) === index);
// }
// element - значение в массиве
// index - индекс значения в массиве
// filter возвращает true false
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// function removeDuplicates(...rest) {
//     return [...new Set(rest)];
// }
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// [1, 2, 3, 2, 4, 1, 5].filter((el, idx, arr) => arr.indexOf(el) === idx);