let ask = +prompt('Высота пирамиды');
let result = ' ';

for(let i = 0; i < ask; i++) {
    for(let k = 0; k <= i; k++) {
        if(k == i){
            result += '\\';
        } else {
          result += '*';
        }
    }
    result += '\n'
}

console.log(result)