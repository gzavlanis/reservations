import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Container } from "react-bootstrap";

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
      else setIsSubmitted(true);
    } else setErrorMessages({ name: "uname", message: errors.uname });
  };

  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <Button>
            <input type="submit" />
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
        <Container>
            <h2>Sign In</h2>
            {isSubmitted ? <div>Success</div> : renderForm}
        </Container>
    </div>
  )
}
