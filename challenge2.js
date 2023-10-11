//palindrome

function palindrome(string){
    let stringReversed = string.split('').reverse().join("")
    console.log(stringReversed)
    if(stringReversed === string) return true
    return false
}

console.log(palindrome('anas'))