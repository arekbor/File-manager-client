import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Background from "../../components/Background";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Background>
          <LinkContainer to={`/api/manager/`} className={"mt-4"}>
            <Button size="sm">File manager</Button>
          </LinkContainer>

          <LinkContainer to={`/upload`} className={"mt-4"}>
            <Button size="sm">Upload files</Button>
          </LinkContainer>
        </Background>
      </Row>
    </Container>
  );
};

export default HomePage;
