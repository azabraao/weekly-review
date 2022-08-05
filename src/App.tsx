import "styles/app.css";
import { Container, Grid, Column, Link, Title } from "components/atoms";
import ChecklistItem from "components/molecules/ChecklistItem";
import QuestionWithItems from "components/organisms/QuestionWithItems";
import { sprinkles } from "styles/sprinkles.css";
import { WeekTasksProvider } from "contexts/WeekTasks";
import { ListTasks } from "components/organisms";

const App = () => {
  return (
    <WeekTasksProvider>
      <Container>
        <Title level="1" paddingTop="10x" paddingBottom="10x">
          Weekly Review
        </Title>
        <Grid>
          <Column flex="3">
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
              <ChecklistItem>
                O que realmente é importante ser feito nessa semana?
              </ChecklistItem>
              <ChecklistItem>Que resultados me trarão?</ChecklistItem>
              <ChecklistItem>
                Compensa investir em algumas atividades abdicando de outras?
              </ChecklistItem>
              <ChecklistItem>
                Essas atividades vão me levar ao meu propósito pessoal ou ao meu
                objetivo? O que posso fazer com o que está atrapalhando?
              </ChecklistItem>
              <ChecklistItem>
                <Link
                  target="_blank"
                  href="https://calendar.google.com/calendar/u/0/r"
                >
                  Ver agenda
                </Link>
                . O que está chegando para o qual eu preciso estar preparado?
              </ChecklistItem>
              <ChecklistItem>
                O que deu errado? O que posso fazer pra próxima semana ser
                melhor?
              </ChecklistItem>
              <ChecklistItem>
                Acessar{" "}
                <Link
                  href="https://www.rescuetime.com/dashboard"
                  target="_blank"
                >
                  Rescue Time
                </Link>{" "}
                e ver meu dashboard
              </ChecklistItem>
            </div>
          </Column>
          <Column flex="2">
            <Title level="2" paddingBottom="8x">
              Tasks for this week
            </Title>
            <ListTasks />
          </Column>
        </Grid>
      </Container>
    </WeekTasksProvider>
  );
};

export default App;
