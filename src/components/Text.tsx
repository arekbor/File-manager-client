import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { File } from "../interfaces/file";
import api from "../utils/api";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import FileInfo from "./FileInfo";

const Text = ({ file }: { file: File }) => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("json");

  const handleChangeLanguage = ({ lang }: { lang: string }) => {
    setLanguage(lang);
  };

  useEffect(() => {
    api.get(`${file.streamPath}`).then((res) => {
      setText(res?.data);
    });
  }, []);

  console.log(text);

  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-2">
            <div>
              <Button
                size="sm"
                onClick={() => handleChangeLanguage({ lang: "json" })}
              >
                Json
              </Button>
              <Button
                size="sm"
                onClick={() => handleChangeLanguage({ lang: "javascript" })}
              >
                Javascript
              </Button>
              <Button
                size="sm"
                onClick={() => handleChangeLanguage({ lang: "cpp" })}
              >
                C++
              </Button>
              <Button
                size="sm"
                onClick={() => handleChangeLanguage({ lang: "php" })}
              >
                PHP
              </Button>
              <Button
                size="sm"
                onClick={() => handleChangeLanguage({ lang: "go" })}
              >
                Go
              </Button>
              <Button
                size="sm"
                onClick={() => handleChangeLanguage({ lang: "java" })}
              >
                Java
              </Button>
            </div>

            <div>
              <SyntaxHighlighter language={language} style={dark}>
                {text}
              </SyntaxHighlighter>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Text;
