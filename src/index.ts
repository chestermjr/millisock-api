import express = require('express');
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = '/api';
const port = 5000;
const app = express();

app.use(express.json());
app.use(`${BASE_URL}/v1/messages`, routes.messages);
app.use(`${BASE_URL}/v1/redirects`, routes.redirects);

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on port: ${port}`);
});
