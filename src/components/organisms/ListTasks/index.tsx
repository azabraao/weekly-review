import { memo, useCallback, useState } from "react";
import { Button } from "components/atoms";
import { ListItem } from "components/molecules";
import { useWeekTasks } from "contexts/WeekTasks";
import { sprinkles } from "styles/sprinkles.css";
import { copyText } from "utils";

const ListTasks = () => {
  const [tasksCopied, setTasksCopied] = useState<boolean>(false);

  const { tasks } = useWeekTasks();

  const onButtonClick = useCallback(() => {
    const prepareToCopy = tasks.map((task) => `${task.title}\n`).join("");
    copyText(prepareToCopy);
    setTasksCopied(true);

    setTimeout(() => {
      setTasksCopied(false);
    }, 3000);
  }, [tasks]);

  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8x",
      })}
    >
      <div>
        {tasks.map((task) => {
          return (
            <ListItem
              key={task.id}
              item={{ id: task.id, content: task.title }}
            />
          );
        })}
      </div>

      {tasks.length > 0 && (
        <Button onClick={onButtonClick}>
          {tasksCopied ? "Tasks copied!" : "Copy tasks"}
        </Button>
      )}
    </div>
  );
};

export default memo(ListTasks);
