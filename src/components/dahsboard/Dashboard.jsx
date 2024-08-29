import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import Books from "../books/Books";
import NewBook from "../newBook/NewBook";

import { AuthenticationContext } from "../../services/authenticationContext/authentication.context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
const Dashboard = () => {
    const [booksList, setBooksList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const { handleLogout } = useContext(AuthenticationContext);

    useEffect(() => {
        fetch("http://localhost:8000/books", {
            headers: {
                accept: "application/json"
            }
        })
            .then((response) => response.json())
            .then((bookData) => {
                const booksMapped = bookData.map(book => ({
                    ...book,
                    bookRating: Array(book.bookRating.length).fill("*"),
                })).sort((a, b) => b.id - a.id);
                setBooksList(booksMapped);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const saveBookDataHandler = (bookData) => {
        const newBookData = {
            ...bookData,
            id: Math.random().toString(),
        };

        fetch("http://localhost:8000/books", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookData)
        })
            .then((response) => {
                if (response.ok) return response.json();
                else {
                    throw new Error("The response has some errors");
                }
            })
            .then(() => {
                const newBooksArray = [newBookData, ...booksList];
                setBooksList(newBooksArray);
                alert("¡Libro agregado!");
            })
            .catch((error) => console.log(error));

    };

    const deleteBookHandler = (id) => {

        fetch(`http://localhost:8000/books/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                const booksFiltered = booksList.filter(book => book.id !== id);
                setBooksList(booksFiltered);
            })
            .catch((error) => console.log(error));

        // localStorage.setItem("books", JSON.stringify(booksFiltered));
    };

    const searchHandler = (searchQuery) => {
        setSearchValue(searchQuery);
        setBooksList(booksList.filter(b =>
            b.bookTitle.toUpperCase().includes(searchQuery.toUpperCase())));
    };
    return (
        <>
            <Row className="w-100">
                <Col />
                <Col className="d-flex justify-content-center" md={6}>
                    <h1>¡Bienvenidos a Book Champions!</h1>
                    <ToggleTheme className="ms-4 mt-2 h-75" />
                </Col>
                <Col className="d-flex justify-content-end align-items-center me-4 mt-2">
                    <Button onClick={handleLogout}>Cerrar sesión </Button>
                </Col>
            </Row>
            <p>¡Quiero leer libros!</p>
            <NewBook onBookDataSaved={saveBookDataHandler} />

            <Books
                books={booksList}
                searchValue={searchValue}
                onSearch={searchHandler}
                onDelete={deleteBookHandler} />
        </>
    );
};

export default Dashboard;