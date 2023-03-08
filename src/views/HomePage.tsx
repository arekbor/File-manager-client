import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import img1 from "../static/image.jpeg";
import img2 from "../static/image2.jpeg";
import img3 from "../static/image3.jpeg";
import img4 from "../static/image4.jpeg";
import img5 from "../static/image5.jpeg";
import "./index.css";

const HomePage = () => {
  const images: string[] = [img1, img2, img3, img4, img5];

  function fetchRndImage() {
    const randomNumber = Math.floor(Math.random() * images.length);
    return images[randomNumber];
  }

  return (
    <Container fluid>
      <Row>
        <Col
          style={{
            backgroundImage: `url(${fetchRndImage()})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          <LinkContainer to={`/api/manager/`} className={"mt-4"}>
            <Button size="sm">File manager</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
