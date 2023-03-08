import { Button, Col, Container, Row } from "react-bootstrap";
import { File, fileType } from "../interfaces/file";
import DownloadButton from "./DownloadButton";
import ShareButton from "./ShareButton";
import { LinkContainer } from "react-router-bootstrap";

const FileInfo = ({ file }: { file: File }) => {
  return (
    <Container>
      <Row>
        <Col className="mt-3">
          <div>{file.fileName}</div>
          <div>{file.size}</div>
          <div>
            {file.fileType === fileType.UnknowFileType && (
              <DownloadButton file={file} disabled={true} />
            )}

            <ShareButton url={window.location.href} />
            <LinkContainer to={`/api/manager/`}>
              <Button size="sm">Main page</Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileInfo;
