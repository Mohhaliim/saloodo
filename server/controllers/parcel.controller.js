const db = require ("../models")
const Parcel = db.parcels;
const Op = db.Sequelize.Op;

// Create a new parcel
async function createParcel(req,res) {
    Parcel.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({error: err});
        })
}

// update a parcel
async function updateParcel(req,res) {
    Parcel.update(req.body.parcel, {
        where: {id: req.body.id}
    }).then(num => {
        if(num === 1) {
            return res.send({message: "parcel is updated"});
        }else {
            return res.send({message: "parcel not found"});
        }
    }).catch(err => {
        console.error(err);
        res.status(500).json({error: err});
    })
}

// delete a parcel
async function deleteParcel(req,res) {
    Parcel.destroy({
        where: {
            id: req.body.id
        }
    }).then(num => {
            if(num === 1) {
                return res.send({message: "parcel is deleted"});
            }else {
                return res.send({message: "parcel not found"});
            }
        }).catch(err => {
            console.error(err);
            res.status(500).json({error: err});
        })
}

// get all sender parcels
async function getSenderParcels(req,res) {
    Parcel.findAll({
        where: {
            senderId: req.body.id
        }
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({error: err});
    })
}

// get all biker parcels
async function getBikerParcels(req,res) {
    Parcel.findAll({
        where: {
            bikerId: req.body.id
        }
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({error: err});
    })
}

// get all available parcels
async function getAvailableParcels(req,res) {
    Parcel.findAll({
        where: {
            bikerId: null
        }
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({error: err});
    })
}

module.exports = {
    createParcel,
    updateParcel,
    deleteParcel,
    getSenderParcels,
    getBikerParcels,
    getAvailableParcels
};