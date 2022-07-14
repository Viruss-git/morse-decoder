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
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function morse(expr) {
    let arrBinar = Object.values(expr); // 
    let arrLetters = []; // Собираем 10 значени для букв в массив
    let subArr = []; // Собираем вложенный массив из массивов со значениями букв (по 10 элементов в каждом)

    for (let i = 0; i <= arrBinar.length; i++) {
        if (i > 0 && i % 10 === 0) { // Если i больше нуля и кратно 10, добавляем массив с буквами в subArr
            subArr.push(arrLetters);
            arrLetters = []; // Обнуляем массив для новых 10 значений
            arrLetters.push(arrBinar[i]); // Добавляем первое значение что бы не пропускать иттерацию
        } else {
            arrLetters.push(arrBinar[i]); // Собирем значения в массив по 10
        }
    }

    let arrayLetters = [];
    for (let i = 0; i < subArr.length; i++) {
        let indexStart = subArr[i].indexOf('1'); // Получаем индекс начала буквы
        arrayLetters[i] = subArr[i].slice(indexStart).join('');
    }
    let letters = arrayLetters.join(' ').split(' ');

    // console.log(letters);

    morseArray = letters.map(function (value) {
        let morseArray = '';
        for (let i = 0; i < value.length; i += 2) {
            let letter = value.slice(i, i + 2);
            switch (letter) {
                case '*': morseArray += ' '; break;
                case '10': morseArray += '.'; break;
                case '11': morseArray += '-'; break;
            }
        }
        return morseArray;
    });
    console.log(morseArray);

    /* for (let item in MORSE_TABLE) {
 
         if (morseArray.includes(item)) {
             result += MORSE_TABLE[item];
         }
     }*/
    result = '';
    for (let item in MORSE_TABLE) {

        console.log(item);
        console.log(morseArray);

        if (morseArray.includes(item)) {
            result += MORSE_TABLE[item];
        }


    }


    // console.log(result);

}

morse(expr);