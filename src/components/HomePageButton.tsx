import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomePageButton = () => {
  return (
    <LinkContainer to={`/`}>
      <Button size="sm">Home</Button>
    </LinkContainer>
  );
};

export default HomePageButton;
