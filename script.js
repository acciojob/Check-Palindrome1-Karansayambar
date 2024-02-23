// complete the given function

function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the original string with its reversed version
    return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = palindrome;

