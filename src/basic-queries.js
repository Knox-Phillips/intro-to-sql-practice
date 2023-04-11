const knex = require('./knex');

const selectAllBooks = async () => {
  const query = `
  SELECT *
  FROM books;
  `;

  const { rows } = await knex.raw(query);
  console.log('All books:', rows);
  return rows;
};

const selectAllTitlesAndGenres = async () => {
  const query = `
  SELECT title,genre
  FROM books
  `;

  const { rows } = await knex.raw(query);
  console.log('All titles, genres:', rows);
  return rows;
};

const selectAllBooksOver250Pages = async () => {
  const query = `
  SELECT *
  FROM books
  WHERE pages > 250
  `;

  const { rows } = await knex.raw(query);
  console.log('Long books:', rows);
  return rows;
};

const insertDuneBook = async () => {
  const query = `
  INSERT INTO books (title,genre,pages,is_movie)
  VALUES ('Dune', 'Sci Fi', '500', 'false')
  RETURNING *;
  `;

  const { rows } = await knex.raw(query);
  console.log('Inserted Dune:', rows);
  return rows;
};

const updateShortBooksToMovies = async () => {
  const query = `
  UPDATE books
  SET is_movie = 'true'
  WHERE pages < 100
  RETURNING *;
  `;

  const { rows } = await knex.raw(query);
  console.log('Newly filmed books:', rows);
  return rows;
};

const deleteDuneBook = async () => {
  const query = `
  DELETE FROM books
  WHERE title = 'Dune';

  `;
  const { rowCount } = await knex.raw(query);
  console.log('Number of deleted Rows', rowCount);
  return { rowCount };
};

module.exports = {
  selectAllBooks,
  selectAllTitlesAndGenres,
  selectAllBooksOver250Pages,
  insertDuneBook,
  updateShortBooksToMovies,
  deleteDuneBook,
};
