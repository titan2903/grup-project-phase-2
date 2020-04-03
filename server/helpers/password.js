const bcrypt = require('bcrypt')
const saltRound = 10

class Password {

    static hashPassword(pass) {
        let salt = bcrypt.genSaltSync(saltRound)
        let hash = bcrypt.hashSync(pass, salt)
        return hash
    }

    static checkPassword(passLogin, passHash) {
        return bcrypt.compareSync(passLogin, passHash)
    }
}

module.exports = Password