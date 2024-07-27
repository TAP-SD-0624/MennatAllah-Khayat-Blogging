import { Request, Response } from 'express';
import { User } from '../models';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};

export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByPk(req.params.userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};

export const updateUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.userId }
        });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.userId);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.userId }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'User not found' });
    }
};
