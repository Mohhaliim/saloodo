module.exports = app => {
    const parcels = require("../controllers/parcel.controller.js");

    var router = require("express").Router();

    router.post("/sender", parcels.getSenderParcels);
    router.post("/biker", parcels.getBikerParcels);
    router.post("/all", parcels.getAvailableParcels);
    router.post("/delete", parcels.deleteParcel);
    router.post("/update", parcels.updateParcel);
    router.post("/create", parcels.createParcel);

    app.use('/api/parcels', router);
}
