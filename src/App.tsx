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
                Extract tasks based on quarterly goals
              </ChecklistItem>
              <QuestionWithItems>
                What would be worth doing this week?
              </QuestionWithItems>
              <ChecklistItem>
                What is really important to be done this week?
              </ChecklistItem>
              <ChecklistItem>What results will this week bring?</ChecklistItem>
              <ChecklistItem>
                Is it worth investing in some activities while giving up others?
              </ChecklistItem>
              <ChecklistItem>
                These activities will lead me to my personal purpose or my
                objective? What can I do with what's getting in the way?
              </ChecklistItem>
              <ChecklistItem>
                What events can I attend this week or in future dates?
              </ChecklistItem>
              <ChecklistItem>
                What trips can I take in future dates?
              </ChecklistItem>
              <ChecklistItem>
                What medical exams do I need to schedule?
              </ChecklistItem>
              <ChecklistItem>
                Which friends or family members should I reach out to?
              </ChecklistItem>
              <ChecklistItem>
                Are there any skills or hobbies I want to develop further?
              </ChecklistItem>
              <ChecklistItem>
                What books or articles would I like to read?
              </ChecklistItem>
              <ChecklistItem>
                <Link
                  target="_blank"
                  href="https://calendar.google.com/calendar/u/0/r"
                >
                  See agenda
                </Link>
                . What is coming that I need to be prepared for?
              </ChecklistItem>
              <ChecklistItem>
                What went wrong? What can I do to make next week better?
              </ChecklistItem>
              <ChecklistItem>
                Access{" "}
                <Link
                  href="https://www.rescuetime.com/dashboard"
                  target="_blank"
                >
                  Rescue Time
                </Link>{" "}
                and see my dashboard
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
