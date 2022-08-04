import "app.css";
import { Container, Title } from "components/atoms";
import ChecklistItem from "components/molecules/ChecklistItem";

const App = () => {
  return (
    <Container>
      <Title level="1" paddingTop="10x" paddingBottom="10x">
        Weekly Review
      </Title>
      <Title level="2" paddingBottom="2x">
        Steps
      </Title>
      <ChecklistItem />
    </Container>
  );
};

export default App;
