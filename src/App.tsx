import "styles/app.css";
import { Container, Title } from "components/atoms";
import ChecklistItem from "components/molecules/ChecklistItem";
import QuestionWithItems from "components/organisms/QuestionWithItems";
import { sprinkles } from "styles/sprinkles.css";

const App = () => {
  return (
    <Container>
      <Title level="1" paddingTop="10x" paddingBottom="10x">
        Weekly Review
      </Title>
      <Title level="2" paddingBottom="8x">
        Steps
      </Title>
      <div
        className={sprinkles({
          display: "flex",
          flexDirection: "column",
          gap: "8x",
        })}
      >
        <ChecklistItem>
          Extrair tarefas com base nos objetivos trimestrais
        </ChecklistItem>
        <QuestionWithItems>
          O que faria essa semana valer a pena?
        </QuestionWithItems>
      </div>
    </Container>
  );
};

export default App;
