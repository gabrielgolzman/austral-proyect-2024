import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const BookDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (!location.state)
        return <h1>¡No se encontró el libro! :O</h1>;

    const {
        title,
        author,
        pageCount,
        summary,
        imageUrl } = location.state.book;

    const goBackHandler = () => {
        navigate("/");
    };

    return <Card className="my-3 w-25">
        <Card.Img height={400} variant="top" src={imageUrl ?? ""} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{author}</Card.Subtitle>
            <p className="my-1">
                <b>Páginas:</b>{pageCount}
            </p>
            <p className="my-3">
                <b>Sipnosis: </b> {summary}
            </p>
            <Button className="me-2" onClick={goBackHandler}>Volver a página principal</Button>
        </Card.Body>

    </Card>;
};

export default BookDetails;