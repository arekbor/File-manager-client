import { AxiosError } from "axios";
import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Error = ({ error }: { error: AxiosError<string, any> | undefined }) => {
  const [show, setShow] = useState(true);
  const handleHide = () => {
    setShow(false);
    const url = window.location.origin + "/api/manager/";
    if (url) {
      window.location.replace(url);
    }
  };
  return (
    <div>
      <Col>
        <Modal show={show} onHide={handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>
              <span className="text-danger">Error</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {error?.code && (
                <div className="mt-3">
                  <span>Code: </span>
                  <span>{error?.code}</span>
                </div>
              )}

              {error?.response && (
                <div>
                  <span>Status: </span>
                  <span>{error?.response?.status}</span>
                </div>
              )}

              {error?.response?.data && (
                <div>
                  <span>Message: </span>
                  <span className="text-danger">{error?.response?.data}</span>
                </div>
              )}
              <div className="mt-2">
                <LinkContainer to="/">
                  <Button size="sm">Back to main page</Button>
                </LinkContainer>
              </div>
            </Row>
          </Modal.Body>
        </Modal>
      </Col>
    </div>
  );
};

export default Error;
