const jwt = require('jsonwebtoken')

function authentication(req, res, next) {
    try {
        const token = req.headers.token
        if (!token) {
            console.log(token)
            res.status(404).json({
                message: 'Token not found'
            })
        } else {
            const decoded = jwt.verify(token, 'movie_list')
            req.UserId = decoded.userId
            next()
        }
    } catch (error) {
        res.status(400).json({
            message: error
        })
        console.log(error)
    }
}

module.exports = authentication