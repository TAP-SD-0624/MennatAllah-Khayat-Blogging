"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const models_1 = require("../models");
const createUser = async (req, res) => {
    try {
        const user = await models_1.User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};
exports.createUser = createUser;
const getAllUsers = async (_req, res) => {
    try {
        const users = await models_1.User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const user = await models_1.User.findByPk(req.params.userId);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};
exports.getUserById = getUserById;
const updateUserById = async (req, res) => {
    try {
        const [updated] = await models_1.User.update(req.body, {
            where: { id: req.params.userId }
        });
        if (updated) {
            const updatedUser = await models_1.User.findByPk(req.params.userId);
            res.status(200).json(updatedUser);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};
exports.updateUserById = updateUserById;
const deleteUserById = async (req, res) => {
    try {
        const deleted = await models_1.User.destroy({
            where: { id: req.params.userId }
        });
        if (deleted) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};
exports.deleteUserById = deleteUserById;
