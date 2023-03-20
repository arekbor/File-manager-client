import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MainPageButton = () => {
  return (
    <LinkContainer to={`/api/manager/`}>
      <Button size="sm">File manager</Button>
    </LinkContainer>
  );
};

export default MainPageButton;
