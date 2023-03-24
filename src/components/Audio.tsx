import { Col, Container, Row } from "react-bootstrap";
import { File } from "../interfaces/file";
import "react-h5-audio-player/lib/styles.css";
import FileInfo from "./FileInfo";
import ReactAudioPlayer from "react-audio-player";

const Audio = ({ file }: { file: File }) => {
  return (
    <div>
      <FileInfo file={file} />
      <Container>
        <Row>
          <Col className="mt-2">
            <ReactAudioPlayer
              src={`${file.streamPath}`}
              autoPlay
              controls
              loop
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Audio;
