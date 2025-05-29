import { categories, articles } from '../models/data.js';

let categoryList = [...categories];

export const getAllCategories = (req, res) => res.json(categoryList);

export const getCategoryById = (req, res) => {
    const category = categoryList.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};

export const createCategory = (req, res) => {
    const { name } = req.body;
    const newCategory = { id: categoryList.length + 1, name };
    categoryList.push(newCategory);
    res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
    const category = categoryList.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const { name } = req.body;
    if (name) category.name = name;

    res.json(category);
};

export const deleteCategory = (req, res) => {
    const index = categoryList.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Category not found' });

    categoryList.splice(index, 1);
    res.status(204).send();
};

export const getArticlesByCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const result = articles.filter(article => article.categoryId === categoryId);
    res.json(result);
};
