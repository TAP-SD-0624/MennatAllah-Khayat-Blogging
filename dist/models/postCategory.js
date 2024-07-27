"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class PostCategory extends sequelize_1.Model {
    static initModel(sequelize) {
        PostCategory.init({
            postId: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
            },
            categoryId: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
            },
        }, {
            tableName: 'post_categories',
            sequelize,
        });
    }
}
exports.default = PostCategory;
