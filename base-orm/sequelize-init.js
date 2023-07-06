const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("sqlite:" + "./.data/spaceX.db");

const rockets = sequelize.define(
    "rockets",
    {
        rocket_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rocket_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Rocket Name es requrido"
                },
                len: {
                    args: [5, 50],
                    msg: "Rocket Name debe ser tipo caracter entre 5 y 50 de longitud"
                }
            },
            unique: {
                args: true,
                msg: "Rocket Name debe ser unico"
            }
        },
        boosters: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Boosters es requerido"
                }
            }
        },
        stages: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Stages es requerido"
                }
            }
        },
        first_flight: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "First Flight es requerido"
                },
                isDate: {
                    args:true,
                    msg: "First Flight debe ser de la forma YYYY-MM-DD"
                }
            }
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Country es requerido"
                },
                len: {
                    args: [5, 50],
                    msg: "Country es de tipo caracter de entre 5 y 50 de longitud"
                }
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Active es requerido"
                }
            }
        }
    },
    {
        hooks: {
            beforeValidate: function (rocket, options) {
                if (typeof rocket.rocket_name === "string") {
                    rocket.rocket_name = rocket.rocket_name.toUpperCase().trim();
                }
                if (typeof rocket.country === "string") {
                    rocket.country = rocket.country.toUpperCase().trim();
                }
            }
        },
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    sequelize,
    rockets
};