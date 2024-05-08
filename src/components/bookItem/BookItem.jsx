import PropTypes from "prop-types";

import { Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";

const BookItem = ({ title, author, rating, pages, image, onSelectBook }) => {
  const clickHandler = () => {
    onSelectBook(title);
  };

  const starsFilled = rating?.map((rating, index) => <StarFill key={index} />);
  const starsEmpty = Array(5 - rating.length)
    .fill("*")
    .map((rating, index) => <Star key={index} />);

  return (
    <Card className="mx-3 mt-2" style={{ width: "22rem" }}>
      <Card.Img
        alt="book image"
        height={400}
        variant="top"
        src={
          image
            ? image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDn136UIxkcecccEMZ4E6tvazbN1c3mKAs17jRWOz_w&s"
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        {starsFilled}{starsEmpty}
        <p>{pages} páginas</p>
        <Button onClick={clickHandler}> Seleccionar libro </Button>
        <Button variant="danger" className="ms-2" onClick={() => { }}>Eliminar libro</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  rating: PropTypes.array,
};
