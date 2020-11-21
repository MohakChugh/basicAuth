const auth = require('../authentication/authentication/auth')
const dbFunctions = require('../authentication/database/functions/userFunctions')

const getProfileDetails = async (req, res) => {
    const { token } = req.params;
    if (await auth.validateToken(token)) {
        const { userID } = req.params;
        const user = await dbFunctions.getUserById(userID);
        res.json({
            error: false,
            data: user
        })
    } else {
        res.json({
            error: true,
            message: 'User Not Found'
        })
    }
}

const updateuser = async (req, res) => {
    const { nameToBeUpdated, email } = req.params;
    let updateUser = await dbFunctions.updateUser(email, nameToBeUpdated);
    if (updateUser) {
        res.json({
            error: false,
            data: updateUser
        })
    } else {
        res.json({
            error: true,
            message: 'User Does not exist'
        })
    }
}

exports.getProfileDetails = getProfileDetails
exports.updateUser = updateuser