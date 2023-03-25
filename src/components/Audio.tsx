import { Col, Container, Modal, Row } from "react-bootstrap";
import { File } from "../interfaces/file";
import FileInfo from "./FileInfo";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";
import Background from "./Background";

const Audio = ({ file }: { file: File }) => {
  const [show, setShow] = useState(true);
  const handleHide = () => {
    setShow(false);
    window.history.back();
  };
  return (
    <Container>
      <Row>
        <ReactAudioPlayer src={`${file.streamPath}`} autoPlay controls loop />
      </Row>
    </Container>
  );
};

export default Audio;
