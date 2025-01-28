// Get all books
exports.getAllBooks = (callback) => {
  const query = 'SELECT * FROM books';
  db.query(query, callback);
};

// Get book by ID
exports.getBookById = (id, callback) => {
  const query = 'SELECT * FROM books WHERE id = ?';
  db.query(query, [id], callback);
};

// Create a new book
exports.createBook = (bookData, callback) => {
  const { title, author, published_date, price } = bookData;
  const query = 'INSERT INTO books (title, author, published_date, price) VALUES (?, ?, ?, ?)';
  db.query(query, [title, author, published_date, price], callback);
};

// Update a book
exports.updateBook = (id, bookData, callback) => {
  const { title, author, published_date, price } = bookData;
  const query = 'UPDATE books SET title = ?, author = ?, published_date = ?, price = ? WHERE id = ?';
  db.query(query, [title, author, published_date, price, id], callback);
};

// Delete a book
exports.deleteBook = (id, callback) => {
  const query = 'DELETE FROM books WHERE id = ?';
  db.query(query, [id], callback);
};
