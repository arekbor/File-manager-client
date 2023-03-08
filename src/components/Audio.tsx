import { Col, Container, Row } from "react-bootstrap";
import { File } from "../interfaces/file";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import FileInfo from "./FileInfo";

const Audio = ({ file }: { file: File }) => {
  return (
    <div>
      <FileInfo file={file} />
      <Container>
        <Row>
          <Col className="mt-2">
            <AudioPlayer className="mt-5" autoPlay src={`${file.streamPath}`} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Audio;
