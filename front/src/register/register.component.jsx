import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default props => (
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Register</Modal.Title>
    </Modal.Header>
    <Form onSubmit={props.handleSubmit}>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={e => props.setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="dirty@hardcore.sex"
            onChange={e => props.setMail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your sexy email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => props.setPassword(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Link to="/">
          <Button variant="secondary">Close</Button>
        </Link>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Modal.Footer>
    </Form>
  </Modal.Dialog>
);

{
  /* <form onSubmit={props.handleSubmit}>
<input
  type="text"
  placeholder="user"
  onChange={e => props.setUsername(e.target.value)}
/>
<input
  type="email"
  placeholder="sexbomb@hardcore.sex"
  onChange={e => props.setMail(e.target.value)}
/>
<input
  type="password"
  placeholder="password"
  onChange={e => props.setPassword(e.target.value)}
/>
<button>Send</button>
</form> */
}

<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Register</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>;
