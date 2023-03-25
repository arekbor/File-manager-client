import { Container, Row } from "react-bootstrap";
import { File } from "../interfaces/file";

const Unknow = ({ file }: { file: File }) => {
  return (
    <Container>
      <Row>
        <span className="text-danger">
          Ten moduł jest w trakcie prac, prosze idz sobie!
        </span>
      </Row>
    </Container>
  );
};

export default Unknow;
