import BookItem from "./components/bookItem/BookItem";

const App = () => {
  const books = [
    {
      bookTitle: "100 años de soledad",
      bookAuthor: "Gabriel García Marquez",
      bookRating: Array(5).fill("*"),
      pageCount: 410,
      imageUrl:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    },
    {
      bookTitle: "Asesinato en el Orient Express",
      bookAuthor: "Agatha Christie",
      bookRating: Array(4).fill("*"),
      pageCount: 256,
      imageUrl:
        "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      bookTitle: "Las dos torres",
      bookAuthor: "J.R.R Tolkien",
      bookRating: Array(5).fill("*"),
      pageCount: 352,
      imageUrl:
        "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      bookTitle: "50 sombras de Grey",
      bookAuthor: "E.L James",
      bookRating: Array(1).fill("*"),
      pageCount: 514,
      imageUrl:
        "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
    },
  ];

  return (
    <div>
      <h1>¡Bienvenidos a Book Champions!</h1>
      <p>¡Quiero leer libros!</p>
      <BookItem
        title={books[0].bookTitle}
        author={books[0].author}
        rating={books[0].bookRating}
        pages={books[0].pageCount}
        image={books[0].imageUrl}
      />
      <BookItem
        title={books[1].bookTitle}
        author={books[1].author}
        rating={books[1].bookRating}
        pages={books[1].pageCount}
        image={books[1].imageUrl}
      />
      <BookItem
        title={books[2].bookTitle}
        author={books[2].author}
        rating={books[2].bookRating}
        pages={books[2].pageCount}
        image={books[2].imageUrl}
      />
      <BookItem
        title={books[3].bookTitle}
        author={books[3].author}
        rating={books[3].bookRating}
        pages={books[3].pageCount}
        image={books[3].imageUrl}
      />
    </div>
  );
};

export default App;
