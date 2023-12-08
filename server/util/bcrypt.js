const bcrypt = require('bcrypt');

const bcryptPassword = (password) => {
    const salt = parseInt('10');
    const bcryptedPassword = bcrypt.hashSync(password, salt);

    return bcryptedPassword;
}

const decryptPassword = (password, byrcptedPassword) => {
    return bcrypt.compareSync(password, byrcptedPassword)
}

module.exports = { bcryptPassword, decryptPassword }