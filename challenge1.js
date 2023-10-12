const word = 'Greetings'

function reverseString(string){

    return string.split('').reverse().join('')
} 

console.log(reverseString(word))

function reverseString2(string){
    let reversed = ''
    const stringl = string.length-1
    for(let i= stringl; i >= 0; i--){
        reversed = reversed.concat(string[i])
    }
    return reversed
}

console.log(reverseString2(word))

function reverseString3(string){
    let stringToArray = string.split('')
    let arrayResult = []
    for(let i = stringToArray.length -1; i >= 0; i--){
        arrayResult.push(stringToArray[i])
    }
    return arrayResult.join('')
}

console.log(reverseString3(word))
