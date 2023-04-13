import { Col, Container, Row } from "react-bootstrap";
import { File, fileType } from "../interfaces/file";
import DownloadButton from "./DownloadButton";
import ShareButton from "./ShareButton";
import MainPageButton from "./MainPageButton";
import HomePageButton from "./HomePageButton";
import CSS from "csstype";

const textStyle: CSS.Properties = {
  fontSize: "small",
  padding: "5px",
};

const FileInfo = ({ file }: { file: File }) => {
  return (
    <Container>
      <Row>
        <Col className="mt-3">
          <div style={textStyle}>
            <i>{file.fileName}</i>
          </div>
          <div style={textStyle}>
            <b>{file.size}</b>
          </div>
          <div>
            {file.fileType === fileType.UnknowFileType && (
              <DownloadButton file={file} disabled={true} />
            )}
            {file.fileType !== fileType.UnknowFileType && (
              <DownloadButton file={file} disabled={false} />
            )}

            <ShareButton url={window.location.href} />
            <MainPageButton />
            <HomePageButton />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileInfo;
