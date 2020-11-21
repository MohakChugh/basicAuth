const authentication = require('../authentication/auth')

const login = async (req, res) => {
    try {
        let { email, password } = req.body
        let result = await authentication.loginUser(email, password)
        if (result === false) {
            res.json({
                error: false,
                success: true,
                message: "The user is not registered! Please register and then try signing in!"
            })
        } else {
            let authorizationToken = `Bearer ${result}`
            res.json({
                error: false,
                success: true,
                token: authorizationToken
            });    
        }
    } catch (err) {
        console.log(err)
        res.json({
            error: true,
            success: false,
            error: err
        })
    }
}

const register = async (req, res) => {
    let { email, password, name } = req.body
    if (!!email && !!password && !!name) {
        let result = await authentication.registerUser(name, email, password)
        if (result) {
            res.json({
                error: false,
                success: true,
                message: 'User Successfully Created!'
            })
        } else {            
            res.send(result)
        }
    } else {
        res.json({
            error: true,
            success: false,
            message: 'Either the username, password or the email id is missing. Please check'
        })
    }
    
}

const validateToken = async (req, res) => {
    let { token } = req.body
    let result = await authentication.validateToken(token)
    res.send(result);
}

exports.login = login
exports.register = register
exports.validateToken = validateToken
