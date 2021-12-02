// Funkce zkontroluje, zda je input palindromem.
// Palindrom je slovo, která má tu vlastnost, že ji lze číst v libovolném směru a má vždy stejný význam.
// Například ABBA je palindrom, protože když jí přečtem opačně, je to stále ABBA.
function checkPalindrome(input) {
    const splitInput = input.split("");
        const reverseInput = splitInput.reverse();
        const reverseInputString = reverseInput.join(""); 
        if (input == reverseInputString) {
            return true;
        } else {
            return false;
        }
    return;
}

exports.checkPalindrome = checkPalindrome;
