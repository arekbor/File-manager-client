import { Container, Row } from "react-bootstrap";
import { File } from "../interfaces/file";
import ReactAudioPlayer from "react-audio-player";

const Audio = ({ file }: { file: File }) => {
  return (
    <Container>
      <Row>
        <ReactAudioPlayer src={`${file.streamPath}`} autoPlay controls />
      </Row>
    </Container>
  );
};

export default Audio;
