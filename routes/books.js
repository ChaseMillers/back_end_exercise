import express from "express";

const schema = {"books": []}

const router = express.Router();

router.get('/books', (req, res) => {
    res.status(200).send(schema);
})

router.post('/books', (req, res) => {

    const book = {id:schema.books.length + 1, ...req.body}

    schema.books.push(book)

    res.status(201).send(book);
})

router.delete('/books', (req, res) => {

    schema.books = []

    res.status(204).send(null);
})
export default router;