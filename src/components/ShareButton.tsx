import { useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";

const ShareButton = ({ url }: { url: string }) => {
  const [message, setMessage] = useState<string>(url);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setMessage(url);
    setShow(true);
  };

  const handleCopy = () => {
    setMessage("Skopiowano do schowka!");

    navigator.clipboard.writeText(url);

    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <>
      <Button size="sm" onClick={handleShow}>
        Share
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>Udostępnij plik</p>
            <Button size="sm" onClick={handleCopy}>
              Copy
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <input type="text" value={message} />
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareButton;
