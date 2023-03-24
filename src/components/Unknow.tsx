import { Container, Row } from "react-bootstrap";
import { File } from "../interfaces/file";
import FileInfo from "./FileInfo";

const Unknow = ({ file }: { file: File }) => {
  return (
    <div>
      <FileInfo file={file} />
      <Container>
        <span className="text-danger">
          Ten moduł jest w trakcie prac, prosze idz sobie!
        </span>
      </Container>
    </div>
  );
};

export default Unknow;
