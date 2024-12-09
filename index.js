import bodyParser from 'body-parser';
import express from 'express';
import studentRoute from './src/routes/studentRoute.js';
import classRoute from './src/routes/classRoute.js';

const port = +process.env.PORT || 8000;
const app = express();
app.use(bodyParser.json());

app.use('/students', studentRoute);
app.use('/classes', classRoute);

app.listen(port, () => console.log(`Server runs on port ${port}`));
