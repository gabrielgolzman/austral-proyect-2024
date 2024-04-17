import BookItem from "../bookItem/BookItem";

const Books = ({ books, onSelectBook }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {books.map((book) => (
        <BookItem
          key={`${book.bookTitle}.${book.bookAuthor}`}
          title={book.bookTitle}
          author={book.bookAuthor}
          rating={book.bookRating}
          pages={book.pageCount}
          image={book.imageUrl}
          onSelectBook={onSelectBook}
        />
      ))}
    </div>
  );
};

export default Books;
