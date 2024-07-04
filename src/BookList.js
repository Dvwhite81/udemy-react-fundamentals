import Book from './Book';
import { BOOKS } from './books';

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="book-list">
        {BOOKS.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
    </>
  );
};

export default BookList;
