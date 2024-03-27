import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const BookItem = ({ title, author, rating, pages, image, children }) => {
  return (
    <Card className="mx-3" style={{ width: "22rem" }}>
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
        <div>{rating?.length} estrellas</div>
        <p>{pages} páginas</p>
      </Card.Body>
      {children}
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
