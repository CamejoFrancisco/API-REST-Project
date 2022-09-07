import users from "../models/User.js";

class userController {

    static listarUsuarios = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        })
    }
}

export default userController;