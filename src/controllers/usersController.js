import users from "../models/User.js";

class userController {

    static getUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        })
    }

    static getUserById = (req, res) => {
        const id = req.params.id;

        users.findById(id, (err, users) => {
            if(err) {
                res.status(404).send({message: `${err.message} Usuário não encontrado, verifique`})
            }else {
                res.status(200).send(users);
            }
        })
    }

    static registerNewUser = (req, res) => {
        let user = new users(req.body);

        //Persistir no banco
        user.save((err) => {
           if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar user.`})
           }else{
                res.status(201).send(user.toJSON());
           } 
        })
    }

    static updateUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndUpdate(id, {$set: req.body}, {runValidators: true}, (err) => {
            if(!err) {
               res.status(200).send({message: 'Usuário atualizado com sucesso'})
            }else {
                res.status(404).send({message: err.message})
            }
        })
    }

    static deleteUser = (req, res) => {
        const id = req.params.id;

        users.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(204).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static getUserByName = (req, res) => {
        let name = req.query.name;

        users.find({'name': {$regex: name, $options: 'i'}}, {}, (err, users) =>{
            if(users.length === 0 || err) {
                res.status(500).send({message: `Nenhum usuário com o nome ${name} encontrado`})
            } else {
                res.status(200).send(users);
            }
        })
    }
}

export default userController;