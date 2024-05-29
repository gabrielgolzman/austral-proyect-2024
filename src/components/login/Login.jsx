import { useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from
    "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    };

    const changePasswordHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (emailRef.current.value.length <= 0) {
            emailRef.current.focus();
            setErrors({ email: true, password: false });
            return;
        }

        if (password.length <= 0) {
            passwordRef.current.focus();
            setErrors({ email: false, password: true });
            return;
        }

        onLogin();
        navigate("/");
    };

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row>
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={submitHandler}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            className={errors.email ?
                                "border border-danger" :
                                ""}
                            ref={emailRef}
                            value={email}
                            onChange={changeEmailHandler}
                            type="email"
                            placeholder="Ingresar email" />
                        {errors.email && <p className="pt-2 ps-2 text-danger">El email es obligatorio</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            className={errors.password ?
                                "border border-danger" :
                                ""}
                            ref={passwordRef}
                            onChange={changePasswordHandler}
                            value={password}
                            type="password"
                            placeholder="Ingresar contraseña"
                        />
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};
export default Login;