const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let text = '';
    let morse = '';
    let i = 0;
        while (i < expr.length){
            if (expr[i] == '*') { i+=2; continue;}
            if (expr[i] + expr[i+1] == '10') morse = morse + '.';
            if (expr[i] + expr[i+1] == '11') morse = morse + '-';
            i+=2;

            if (i % 10 == 0 ){
                text+=MORSE_TABLE[morse];
                if (expr[i] == '*') text+=' ';
                morse='';
            }
        }
    return text;
}

module.exports = {
    decode
}