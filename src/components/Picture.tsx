import { Col, Container, Row, Image } from "react-bootstrap";
import { File } from "../interfaces/file";

const Picture = ({ file }: { file: File }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-2 text-center">
            <Image src={file.streamPath} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Picture;
