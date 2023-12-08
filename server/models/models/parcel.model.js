module.exports = (sequelize, DataTypes) => {
    const Parcel = sequelize.define('Parcel', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bikerId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        senderName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bikerName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pickUpLocation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        dropOffLocation: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        pickupTimestamp: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        deliveryTimestamp: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    });

    return Parcel;
}