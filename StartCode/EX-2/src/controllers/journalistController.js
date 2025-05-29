import { journalists, articles } from '../models/data.js';

let journalistList = [...journalists];

export const getAllJournalists = (req, res) => res.json(journalistList);

export const getJournalistById = (req, res) => {
    const journalist = journalistList.find(j => j.id === parseInt(req.params.id));
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

export const createJournalist = (req, res) => {
    const { name, email } = req.body;
    const newJournalist = { id: journalistList.length + 1, name, email };
    journalistList.push(newJournalist);
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    const journalist = journalistList.find(j => j.id === parseInt(req.params.id));
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

    const { name, email } = req.body;
    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.json(journalist);
};

export const deleteJournalist = (req, res) => {
    const index = journalistList.findIndex(j => j.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Journalist not found' });

    journalistList.splice(index, 1);
    res.status(204).send();
};

export const getArticlesByJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const result = articles.filter(article => article.journalistId === journalistId);
    res.json(result);
};
