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
    let output = '';
    let exprArr = expr.split('');
    while(exprArr.length !== 0){
        // console.log(exprArr)
        let particle = exprArr.splice(0,10).slice()
        
        // console.log('particle', particle)
        const firstSymbol = particle.findIndex(el => el === '1');
        // console.log(particle.slice(firstSymbol))
        if (firstSymbol !== -1){
            // console.log('test:',particle.slice(firstSymbol).map((el, index) => {return index % 2 ? ('' + el) : (' ' + el)}).join(''))
            // console.log('test;',particle.slice(firstSymbol).map((el, index) => {return index % 2 ? ('' + el) : (' ' + el)}).join('').slice(1).split(' '))
            // console.log(particle.slice(firstSymbol).map((el, index) => {return index % 2 ? ('' + el) : (' ' + el)}).join('').slice(1).split(' ').map(el => el === '10' ? '.': '-').join(''));
            output += MORSE_TABLE[particle.slice(firstSymbol).map((el, index) => {return index % 2 ? ('' + el) : (' ' + el)}).join('').slice(1).split(' ').map(el => el === '10' ? '.': '-').join('')];
        } else {
            output += " ";
        }
        //particle = firstSymbol === -1 ? ' ': particle.slice(firstSymbol).map((el, index) => {return index % 2 ? el : ' ' + el}).join('').split(' ').map(el => Object.toString(el) === '10' ? '.': '-')
        // exprArr = exprArr.splice(0,10);
        // console.log(exprArr.splice(0,10))
    }
    return output
}

module.exports = {
    decode
}