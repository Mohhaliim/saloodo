const db = require ("../models")
const User = db.users;
const Op = db.Sequelize.Op;
const { bcryptPassword, decryptPassword } = require('../util/bcrypt');

// register a new user
async function registerUser(req,res) {
    const user = req.body;
    const hashedPassword = bcryptPassword(user.password);

    User.create({...user, password: hashedPassword})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({error: err});
        })
}

// login user
async function loginUser(req,res) {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
            if(!user) {
                return res.status(404).send({message: "User not found."});
            }

            if(!decryptPassword(req.body.password, user.password)) {
                return res.status(401).send({message: "Invalid password."})
            }

            res.status(200).send({
                id: user.id,
                type: user.type
            });
        }).catch(err => {
            console.error(err);
            res.status(500).json({error: err});
        })
}

// get a user
async function getUser(req,res) {
    User.findOne({
        where: {
            id: req.body.id
        }
    }).then(user => {
            if(!user) {
                return res.status(404).send({message: "User not found."});
            }

            res.status(200).send({user});
        }).catch(err => {
            console.error(err);
            res.status(500).json({error: err});
        })
}

// delete a user
async function deleteUser(req,res) {
    User.destroy({
        where: {
            id: req.body.id
        }
    }).then(num => {
            if(num === 1) {
                return res.send({message: "User is deleted"});
            }else {
                return res.send({message: "User not found"});
            }
        }).catch(err => {
            console.error(err);
            res.status(500).json({error: err});
        })
}

module.exports = {
    registerUser,
    deleteUser,
    loginUser,
    getUser
};
