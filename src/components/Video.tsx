import { Container, Row } from "react-bootstrap";
import { File } from "../interfaces/file";

const Video = ({ file }: { file: File }) => {
  return (
    <Container>
      <Row>
        <video controls height="500">
          <source src={file.streamPath} />
        </video>{" "}
      </Row>
    </Container>
  );
};

export default Video;
