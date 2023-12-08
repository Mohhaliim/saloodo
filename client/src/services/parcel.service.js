import http from '../http-common';

class parcelServices {
    getSenderParcels(id) {
        return http.post('/parcels/sender', id);
    }

    getBikerParcels(id) {
        return http.post('/parcels/biker', id);
    }

    getAvailableParcels(id) {
        return http.post('/parcels/all', id);
    }

    delete(id) {
        return http.post('/parcels/delete', id)
    }

    update(id, parcel) {
        console.log(id, parcel);
        return http.post('/parcels/update', {id, parcel})
    }

    create(parcel) {
        return http.post('/parcels/create', parcel)
    }
}

export default new parcelServices();
