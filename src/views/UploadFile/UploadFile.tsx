import React, { useState } from "react";
import Dropzone from "react-dropzone";
import ProgressBar from "@ramonak/react-progress-bar";
import api from "../../utils/api";
import { Container, Row } from "react-bootstrap";
import "./style.css";
import { FileEarmark } from "react-bootstrap-icons";
import MainPageButton from "../../components/MainPageButton";
import HomePageButton from "../../components/HomePageButton";
import { setTimeout } from "timers/promises";

const UploadFile = () => {
  const [progress, setProgress] = useState<number>(0);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [showText, setShowText] = useState<string>("");
  const [disableProgress, setDisableProgress] = useState<boolean>(false);

  if (progress >= 100) {
    window.setTimeout(() => {
      setShowText("done!");
      window.setTimeout(() => {
        setShowProgress(false);
        setDisableProgress(false);
      }, 1000);
    }, 2000);
  }

  const handleDrop = async (acceptedFiles: File[]) => {
    setShowProgress(true);
    setDisableProgress(true);

    setFiles([...files, ...acceptedFiles]);
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const res = await api.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            setProgress(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          }
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-3">
      <MainPageButton />
      <HomePageButton />
      <Row>
        <div>
          <Dropzone
            onDrop={handleDrop}
            disabled={disableProgress}
            autoFocus={true}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="dropFiles">
                  <div>
                    Przeciągnij i upuść plik lub kliknij, aby wybrać plik
                  </div>
                  <div>
                    <FileEarmark size={35} />
                  </div>
                </div>
              </div>
            )}
          </Dropzone>
        </div>
        <div className="progress-bar">
          {showProgress && (
            <ProgressBar completed={progress} customLabel={showText} />
          )}
        </div>
      </Row>
    </Container>
  );
};

export default UploadFile;
