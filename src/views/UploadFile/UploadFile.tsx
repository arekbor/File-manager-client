import { useRef, useState } from "react";
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
import { useQueries, UseQueryResult } from "react-query";
import Error from "../../components/Error";

import ReCAPTCHA from "react-google-recaptcha";

type QueryResults = [
  UseQueryResult<string[], AxiosError<string, any>>,
  UseQueryResult<void, AxiosError<string, any>>
];

const UploadFile = () => {
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

  const fetchUploadFile = async (
    formUpload: FormData | undefined
  ): Promise<void> => {
    console.log("form upload: ", formUpload);
    const res = await api({
      method: "post",
      url: "/api/upload",
      data: formUpload,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (event) => {
        if (event.total) {
          setProgress(Math.round((event.loaded * 100) / event.total));
        }
      },
    });
    if (res.status === 200) {
      return res.data;
    }
    throw new AxiosError(`error, status: ${res.status}`);
  };

  const [progress, setProgress] = useState<number>(0);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const [showText, setShowText] = useState<string>("");
  const [disableProgress, setDisableProgress] = useState<boolean>(false);
  const [folder, setFolder] = useState<string | undefined>("root");
  const [captchaToken, setCaptchaToken] = useState<string | null>("");
  const [uploadForm, setUploadForm] = useState<FormData>();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChangeCaptchaToken = (value: string | null) => {
    setCaptchaToken(value);
  };

  const queries = useQueries<QueryResults>([
    {
      queryKey: "folderNames",
      queryFn: fetchFolderNames,
    },
    {
      queryKey: ["uploadForm", uploadForm],
      queryFn: async () => {
        await fetchUploadFile(uploadForm);
      },
      enabled: !!uploadForm,
    },
  ]);

  const [folderNames, uploadFile] = queries;

  const {
    data: dataFolderNames,
    isError: isErrorFolderNames,
    error: errorFolderNames,
  } = folderNames;

  const { isError: isErrorUploadFile, error: errorUploadFile } = uploadFile;

  if (progress >= 100) {
    window.setTimeout(() => {
      setShowText("done!");
      window.setTimeout(() => {
        setShowProgress(false);
        setDisableProgress(false);
        handleResetCaptcha();
      }, 1000);
    }, 2000);
  }

  const handleDrop = async (acceptedFiles: File[]) => {
    setShowProgress(true);
    setDisableProgress(true);

    setFiles([...files, ...acceptedFiles]);
    const formData = new FormData();

    if (folder && captchaToken) {
      acceptedFiles.forEach((file) => {
        formData.append("file", file);
        formData.append("folderName", folder);
        formData.append("captcha", captchaToken);
      });
    }
    setUploadForm(formData);
  };

  const handleResetCaptcha = () => {
    recaptchaRef.current?.reset();
  };

  if (isErrorFolderNames) {
    return <Error error={errorFolderNames} />;
  }
  if (isErrorUploadFile) {
    return <Error error={errorUploadFile} />;
  }

  if (dataFolderNames) {
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
                {dataFolderNames.map((folderName, key) => (
                  <option key={key} value={folderName}>
                    {folderName}
                  </option>
                ))}
              </FormSelect>
              <ReCAPTCHA
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px",
                }}
                ref={recaptchaRef}
                sitekey="6LfK65olAAAAABrxfCcEmWdxa-g4pZRRseFmNPCF"
                onChange={(value) => {
                  handleChangeCaptchaToken(value);
                }}
                onExpired={() => {
                  handleResetCaptcha();
                }}
              />
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
