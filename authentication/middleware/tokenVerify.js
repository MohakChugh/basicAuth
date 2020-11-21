const authentication = require('../authentication/auth')

const verifyToken = (req, res, next) => {
    let { token } = req.body
    let result = await authentication.validateToken(token)
    if (!result) {
        res.json({
            error: true,
            success: false,
            error: 'Token could not be verified! Authentication failed!'
        })
    }
    next()
}

exports.verifyToken = verifyToken