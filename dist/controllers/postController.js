"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryForPost = exports.getCommentsForPost = exports.getCategoriesForPost = exports.createCommentForPost = exports.deletePostById = exports.updatePostById = exports.getPostById = exports.getAllPosts = exports.createPost = void 0;
const models_1 = require("../models");
const createPost = async (req, res) => {
    try {
        const post = await models_1.Post.create(req.body);
        res.status(201).json(post);
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.createPost = createPost;
// export const getAllPosts = async (_req: Request, res: Response): Promise<void> => {
//     try {
//         const posts = await Post.findAll({
//             include: [User, Category, Comment]
//         });
//         res.status(200).json(posts);
//     } catch (error) {
//         res.status(500).json({ error: 'Post not found' });
//     }
// };
// Get all posts with associated users, categories, and comments
const getAllPosts = async (req, res) => {
    try {
        const posts = await models_1.Post.findAll({
            include: [
                { model: models_1.User, as: 'user' },
                { model: models_1.Category, as: 'categories' },
                { model: models_1.Comment, as: 'comments' }
            ]
        });
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.getAllPosts = getAllPosts;
// export const getPostById = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const post = await Post.findByPk(req.params.postId, {
//             include: [User, Category, Comment]
//         });
//         if (post) {
//             res.status(200).json(post);
//         } else {
//             res.status(404).json({ error: 'Post not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Post not found' });
//     }
// };
// Get a post by ID with associated users, categories, and comments
const getPostById = async (req, res) => {
    try {
        const post = await models_1.Post.findByPk(req.params.postId, {
            include: [
                { model: models_1.User, as: 'user' },
                { model: models_1.Category, as: 'categories' },
                { model: models_1.Comment, as: 'comments' }
            ]
        });
        if (post) {
            res.status(200).json(post);
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.getPostById = getPostById;
const updatePostById = async (req, res) => {
    try {
        const [updated] = await models_1.Post.update(req.body, {
            where: { id: req.params.postId }
        });
        if (updated) {
            const updatedPost = await models_1.Post.findByPk(req.params.postId);
            res.status(200).json(updatedPost);
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.updatePostById = updatePostById;
const deletePostById = async (req, res) => {
    try {
        const deleted = await models_1.Post.destroy({
            where: { id: req.params.postId }
        });
        if (deleted) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.deletePostById = deletePostById;
const createCommentForPost = async (req, res) => {
    try {
        const post = await models_1.Post.findByPk(req.params.postId);
        if (post) {
            const comment = await models_1.Comment.create({ ...req.body, postId: post.id });
            res.status(201).json(comment);
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.createCommentForPost = createCommentForPost;
// export const getCommentsForPost = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const post = await Post.findByPk(req.params.postId, {
//             include: [Comment]
//         });
//         if (post) {
//             res.status(200).json(post.get('comments'));
//         } else {
//             res.status(404).json({ error: 'Post not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Post not found' });
//     }
// };
// export const getCategoriesForPost = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const post = await Post.findByPk(req.params.postId, {
//             include: [Category]
//         });
//         if (post) {
//             res.status(200).json(post.get('categories'));
//         } else {
//             res.status(404).json({ error: 'Post not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Post not found' });
//     }
// };
// Get categories for a specific post
const getCategoriesForPost = async (req, res) => {
    try {
        const post = await models_1.Post.findByPk(req.params.postId, {
            include: [{ model: models_1.Category, as: 'categories' }]
        });
        if (post) {
            res.status(200).json(post.get('categories'));
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.getCategoriesForPost = getCategoriesForPost;
// Get comments for a specific post
const getCommentsForPost = async (req, res) => {
    try {
        const post = await models_1.Post.findByPk(req.params.postId, {
            include: [{ model: models_1.Comment, as: 'comments' }]
        });
        if (post) {
            res.status(200).json(post.get('comments'));
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.getCommentsForPost = getCommentsForPost;
const createCategoryForPost = async (req, res) => {
    try {
        const post = await models_1.Post.findByPk(req.params.postId);
        if (post) {
            const category = await models_1.Category.create(req.body);
            await models_1.PostCategory.create({ postId: post.id, categoryId: category.id });
            res.status(201).json(category);
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Post not found' });
    }
};
exports.createCategoryForPost = createCategoryForPost;
