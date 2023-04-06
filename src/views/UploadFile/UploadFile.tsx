import { useState } from "react";
import Dropzone from "react-dropzone";
import ProgressBar from "@ramonak/react-progress-bar";
import api from "../../utils/api";
import {
  Container,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import "./style.css";
import { FileEarmark } from "react-bootstrap-icons";
import MainPageButton from "../../components/MainPageButton";
import HomePageButton from "../../components/HomePageButton";
import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import Loader from "../../components/loader/loader";
import Error from "../../components/Error";

const fetchFolderNames = async (): Promise<string[]> => {
  const res = await api<string[]>({
    method: "get",
    url: "/api/folderNames",
  });
  if (res.status === 200) {
    return res.data;
  }
  throw new AxiosError(`error, status: ${res.status}`);
};

const UploadFile = () => {
  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data,
  }: UseQueryResult<string[], AxiosError<string, any>> = useQuery<
    string[],
    AxiosError<string, any>
  >(["folderNames"], () => fetchFolderNames());

  const [progress, setProgress] = useState<number>(0);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [showText, setShowText] = useState<string>("");
  const [disableProgress, setDisableProgress] = useState<boolean>(false);
  const [folder, setFolder] = useState<string | undefined>("root");

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

    if (folder) {
      acceptedFiles.forEach((file) => {
        formData.append("file", file);
        formData.append("folderName", folder);
      });
    } else {
      throw "error while preparing form!";
    }

    await api.post("/api/upload", formData, {
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
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error error={error} />;
  }
  if (data) {
    return (
      <Container className="mt-3">
        <MainPageButton />
        <HomePageButton />
        <Row>
          <div>
            <FormGroup>
              <FormLabel>Wybierz miejsce docelowe</FormLabel>
              <FormSelect
                onChange={(e) => {
                  setFolder(e.currentTarget.value);
                }}
              >
                {data.map((folderName, key) => (
                  <option key={key} value={folderName}>
                    {folderName}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>
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
  }
  return <div>Nothing to response...</div>;
};

export default UploadFile;
