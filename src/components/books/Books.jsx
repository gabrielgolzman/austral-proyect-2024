import BookItem from "../bookItem/BookItem";
import BookSearch from "../filter/bookSearch/BookSearch";

const Books = ({ books, onSearch, searchValue, onDelete }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={`${book.bookTitle}.${book.bookAuthor}`}
      id={book.id}
      title={book.bookTitle}
      author={book.bookAuthor}
      rating={book.bookRating}
      pages={book.pageCount}
      image={book.imageUrl}
      summary={book.summary}
      onDelete={onDelete}
    />
  ));
  return (
    <>
      <BookSearch onSearch={onSearch} searchValue={searchValue} />
      <div className="d-flex justify-content-center flex-wrap">
        {books.length > 0 ?
          booksMapped :
          <p>No se encontraron libros con el título <span className="fw-bold">{searchValue}</span></p>}
      </div>
    </>
  );
};

export default Books;
