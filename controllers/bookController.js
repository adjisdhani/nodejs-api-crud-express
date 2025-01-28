const bookModel = require('../models/bookModel');

// Get all books
exports.getBooks = (req, res) => {
  bookModel.getAllBooks((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Get book by ID
exports.getBookById = (req, res) => {
  const { id } = req.params;
  bookModel.getBookById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(results[0]);
  });
};

// Create a new book
exports.createBook = (req, res) => {
  const bookData = req.body;
  bookModel.createBook(bookData, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Book created', bookId: results.insertId });
  });
};

// Update a book
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const bookData = req.body;
  bookModel.updateBook(id, bookData, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book updated' });
  });
};

// Delete a book
exports.deleteBook = (req, res) => {
  const { id } = req.params;
  bookModel.deleteBook(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  });
};
