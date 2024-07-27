"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCategory = exports.Comment = exports.Category = exports.Post = exports.User = exports.sequelize = void 0;
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const user_1 = __importDefault(require("./user"));
exports.User = user_1.default;
const post_1 = __importDefault(require("./post"));
exports.Post = post_1.default;
const category_1 = __importDefault(require("./category"));
exports.Category = category_1.default;
const comment_1 = __importDefault(require("./comment"));
exports.Comment = comment_1.default;
const postCategory_1 = __importDefault(require("./postCategory"));
exports.PostCategory = postCategory_1.default;
// Initialize models
user_1.default.initModel(database_1.default);
post_1.default.initModel(database_1.default);
category_1.default.initModel(database_1.default);
comment_1.default.initModel(database_1.default);
postCategory_1.default.initModel(database_1.default);
// Define associations
user_1.default.hasMany(post_1.default, { foreignKey: 'userId', as: 'posts' });
post_1.default.belongsTo(user_1.default, { foreignKey: 'userId', as: 'user' });
post_1.default.belongsToMany(category_1.default, { through: postCategory_1.default, as: 'categories', foreignKey: 'postId' });
category_1.default.belongsToMany(post_1.default, { through: postCategory_1.default, as: 'posts', foreignKey: 'categoryId' });
post_1.default.hasMany(comment_1.default, { foreignKey: 'postId', as: 'comments' });
comment_1.default.belongsTo(post_1.default, { foreignKey: 'postId', as: 'post' });
comment_1.default.belongsTo(user_1.default, { foreignKey: 'userId', as: 'user' });
user_1.default.hasMany(comment_1.default, { foreignKey: 'userId', as: 'comments' });
