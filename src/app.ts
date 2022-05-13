import express from 'express';

const app = express();
console.log('Hello World');

app.use(express.json());

export default app;
