import { useState } from "react";

import PropTypes from "prop-types";

import { Card, Button } from "react-bootstrap";

const BookItem = ({ title, author, rating, pages, image }) => {
  const [bookTitle, setBookTitle] = useState(title);

  const clickHandler = () => {
    setBookTitle("Actualizado");
  };

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
        <Card.Title>{bookTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating?.length} estrellas</div>
        <p>{pages} páginas</p>
        <Button onClick={clickHandler}> Seleccionar libro </Button>
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
