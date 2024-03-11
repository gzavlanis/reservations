import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const database = [
    {
      username: "gallioshouses",
      password: "Loutra2023",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value)
        setErrorMessages({ name: "pass", message: errors.pass });
      else {
        setIsSubmitted(true);
      }
    } else setErrorMessages({ name: "uname", message: errors.uname });
  };

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  const renderForm = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="form-outline mb-4">
        <Form.Control
          type="text"
          name="uname"
          placeholder="Username"
          required
        />
        {renderErrorMessage("uname")}
      </Form.Group>
      <Form.Group className="form-outline mb-4">
        <Form.Control
          type="password"
          name="pass"
          placeholder="Password"
          required
        />
        {renderErrorMessage("pass")}
      </Form.Group>
      <Button variant="success" type="submit">
        <h5>Login</h5>
      </Button>
    </Form>
  );

  return (
    <div>
      <Container className="mt-5 shadow-lg p-5 bg-light">
        <h2 className="h2">Welcome Back!</h2>
        {isSubmitted ? navigateToHome() : renderForm}
      </Container>
    </div>
  );
}
