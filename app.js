import express from "express";
import bookRoutes from './routes/books.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // converts body to json

app.use('/api', bookRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});


export default app;
