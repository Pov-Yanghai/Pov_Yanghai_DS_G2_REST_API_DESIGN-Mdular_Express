// import express from 'express';
// import { articles } from './models/data';

// const app = express();

// const PORT = 3000;

// // app.get('/', (req, res) => {
// //     res.json(articles)
// // });

// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import articleRoutes from './src/routes/articleRoutes.js';
import journalistRoutes from './src/routes/journalistRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import logger from './src/middleware/logger.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use('/articles', articleRoutes);
app.use('/journalists', journalistRoutes);
app.use('/categories', categoryRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
