import { Form } from "react-bootstrap";

const BookSearch = ({ onSearch, searchValue }) => {
    const searchHandler = (event) => {
        onSearch(event.target.value);
    };
    return <Form.Group className="mb-3" controlId="searchBook">
        <Form.Control value={searchValue} onChange={searchHandler} type="text" placeholder="Buscar libro..." />
    </Form.Group>;
};

export default BookSearch;