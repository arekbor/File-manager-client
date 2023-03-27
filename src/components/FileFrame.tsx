import { Modal, Row } from "react-bootstrap";
import { File, fileType } from "../interfaces/file";
import FileInfo from "./FileInfo";
import { useState } from "react";
import Background from "./Background";
import Audio from "./Audio";
import Text from "./Text";
import Picture from "./Picture";
import Video from "./Video";
import Unknow from "./Unknow";
import CSS from "csstype";

const FileFrame = ({ file }: { file: File }) => {
  const paddingStyle: CSS.Properties = {
    padding: "35px",
  };

  const [show, setShow] = useState(true);
  const handleHide = () => {
    setShow(false);
    window.history.back();
  };
  return (
    <div>
      <Background>
        <Modal show={show} onHide={handleHide} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              <FileInfo file={file} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row style={paddingStyle}>
              {file.fileType === fileType.AudioFileType && (
                <Audio file={file} />
              )}
              {file.fileType === fileType.TextFileType && <Text file={file} />}

              {file.fileType === fileType.ImageFileType && (
                <Picture file={file} />
              )}

              {file.fileType === fileType.VideoFileType && (
                <Video file={file} />
              )}

              {file.fileType === fileType.UnknowFileType && (
                <Unknow file={file} />
              )}
            </Row>
          </Modal.Body>
        </Modal>
      </Background>
    </div>
  );
};

export default FileFrame;
