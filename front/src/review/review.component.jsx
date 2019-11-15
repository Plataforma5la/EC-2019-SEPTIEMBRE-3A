import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="navButton" id="reviewButton" onClick={handleShow}>
        Dar Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Dar Review</Modal.Title>
        </Modal.Header>
        <Form onSubmit={props.handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Valoracion</Form.Label>
              <Form.Control
                type="range"
                min="1" max="5" className="slider"
                onChange={e => props.setScore(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Comentarios</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe tu comentario aca!"
                onChange={e => props.setContent(e.target.value)}
              />
              {/* <Form.Text className="text-muted">{props.wrongUser}</Form.Text> */}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Enviar!
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};