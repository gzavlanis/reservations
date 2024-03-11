import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button } from "react-bootstrap";
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
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input type="text" name="uname" className="form-control" required />
        <label>Username</label>
        {renderErrorMessage("uname")}
      </div>
      <div className="form-outline mb-4">
        <input type="password" name="pass" className="form-control" required />
        <label>Password</label>
        {renderErrorMessage("pass")}
      </div>
      <div>
        <Button className="btn btn-success" type="submit">
          <h4>Login</h4>
        </Button>
      </div>
    </form>
  );

  return (
    <div>
      <Container className="w-50 mt-5 shadow-lg p-5">
        <h2 className="h2">Welcome Back!</h2>
        {isSubmitted ? navigateToHome() : renderForm}
      </Container>
    </div>
  );
}
