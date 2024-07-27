"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    static initModel(sequelize) {
        User.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
            email: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
                unique: true,
            },
            password: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
        }, {
            tableName: 'users',
            sequelize,
        });
    }
}
exports.default = User;
