"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
    static initModel(sequelize) {
        Post.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: new sequelize_1.DataTypes.STRING(128),
                allowNull: false,
            },
            content: {
                type: new sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
        }, {
            tableName: 'posts',
            sequelize,
        });
    }
}
exports.default = Post;
