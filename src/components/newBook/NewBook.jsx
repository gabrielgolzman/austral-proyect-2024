import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewBook = ({ onBookDataSaved }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Check form");
      if (title && author && rating && pageCount)
        setFormValid(true);
      else
        setFormValid(false);
    }, 500);


    return () => {
      console.log("Cleanup!");
      clearTimeout(timer);

    };
  }, [title, author, rating, pageCount]);

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const changeRatingHandler = (event) => {
    setRating(event.target.value);
  };

  const changePageCountHandler = (event) => {
    setPageCount(event.target.value);
  };

  const changeImageUrlHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const addBook = (event) => {
    event.preventDefault();
    const bookData = {
      bookTitle: title,
      bookAuthor: author,
      bookRating:
        rating !== "" ? Array(parseInt(rating, 10)).fill("*") : Array(0),
      pageCount: parseInt(pageCount, 10),
      imageUrl,
    };

    onBookDataSaved(bookData);
    setTitle("");
    setAuthor("");
    setRating("");
    setPageCount("");
    setImageUrl("");
  };
  return (
    <Card className="m-4 w-50" bg="success">
      <Card.Body>
        <Form className="text-white" onSubmit={addBook}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  onChange={changeTitleHandler}
                  value={title}
                  required
                  placeholder="Ingresar título"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookAuthor">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar autor"
                  onChange={changeAuthorHandler}
                  value={author}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookRating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de estrellas"
                  max={5}
                  min={0}
                  onChange={changeRatingHandler}
                  value={rating}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookPageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  min={1}
                  onChange={changePageCountHandler}
                  value={pageCount}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="bookImageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar url de imagen"
                onChange={changeImageUrlHandler}
                value={imageUrl}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col md={3} className="d-flex justify-content-end">
              <Button variant="primary" type="submit" disabled={!formValid}>
                Agregar lectura
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewBook;
