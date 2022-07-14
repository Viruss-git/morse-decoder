const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

/*
function decode(expr) {
    // write your solution here
}

module.exports = {
    decode
}

*/
const expr = "00101010100000000010";

function morse(expr) {
    let arrBinar = Object.values(expr); // 
    let arrLetters = []; // Собираем 10 значени для букв в массив
    let subArr = []; // Собираем вложенный массив из массивов со значениями букв (по 10 элементов в каждом)

    for (let i = 0; i <= arrBinar.length; i++) {
        if (i > 0 && i % 10 === 0) {
            // Если i больше нуля и кратно 10, добавляем массив с буквами в subArr
            subArr.push(arrLetters);
            arrLetters = [];
            // Обнуляем массив для новых 10 значений
            arrLetters.push(arrBinar[i]);
            // Добавляем первое значение что бы не пропускать иттерацию
        } else {
            arrLetters.push(arrBinar[i]);
            // Собирем значения в массив по 10
        }
    }

    //console.log(subArr);

    return subArr.reduce((acc, value, index) => {
        console.log(value);
        if (value !== 'number') {
            console.log('Не цифра');
            let index = value.indexOf('1') - 1; // Получаем индекс начала буквы
            console.log(index);
        } else {
            console.log('Цифра');
        }

    }, []);


    // console.log(subArr);

}

morse(expr);





// const expr = "0010101010 0000000010 001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// const result = "hello world";

/*
 arrMorse.reduce((acc, value, index) => {
     console.log(index);
     if (index > 0 && index % 10 === 0) {
         subArr.push(acc);
         acc = [];
         return acc + value;
     } else {
         return acc + value;
     }
 }, []);
 */