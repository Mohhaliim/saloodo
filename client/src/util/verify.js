export function isValidName(name){
    var lettersWithSpaceRegex = /^[A-Za-z\s]+$/;

    return lettersWithSpaceRegex.test(name);
}

export function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}
