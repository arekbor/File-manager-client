import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import img1 from "../static/image.jpeg";
import img2 from "../static/image2.jpeg";
import img3 from "../static/image3.jpeg";
import img4 from "../static/image4.jpeg";
import img5 from "../static/image5.jpeg";

type ContainerProps = {
  children: React.ReactNode;
};

const Background = (props: ContainerProps) => {
  const [image, setImage] = useState<string>("");

  const images: string[] = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setImage(images[randomNumber]);
  }, []);

  return (
    <Col
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {props.children}
    </Col>
  );
};

export default Background;
