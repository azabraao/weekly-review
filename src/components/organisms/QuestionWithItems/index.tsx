import { Text, TextInput } from "components/atoms";
import { AddItemButton, ListItem } from "components/molecules";
import { useWeekTasks } from "contexts/WeekTasks";
import { memo, useCallback, useState } from "react";
import { sprinkles } from "styles/sprinkles.css";
import { classes } from "utils";
import { questionsWithItems } from "./styles.css";

interface AddItemTextInputProps {
  onAdd: (content: string) => void;
  onCancel: () => void;
}

const AddItemTextInput = ({ onAdd, onCancel }: AddItemTextInputProps) => {
  const [content, setContent] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onAdd(content);
        setContent("");
      } else if (e.key === "Escape") {
        onCancel();
      }
    },
    [content]
  );

  return (
    <TextInput
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoFocus
      onBlur={onCancel}
      value={content}
    />
  );
};

interface QuestionWithItemsProps {
  children: React.ReactNode;
}

const QuestionWithItems = ({ children }: QuestionWithItemsProps) => {
  const [isAddingItem, setIsAddingItem] = useState<boolean>(false);
  const { tasks, removeTask, addTask } = useWeekTasks();

  const handleAddItem = useCallback(
    (content: string) => {
      addTask({
        id: tasks.length,
        title: content,
      });
    },
    [tasks]
  );

  return (
    <div
      className={classes(
        sprinkles({
          display: "flex",
          gap: "2x",
          flexDirection: "column",
        }),
        questionsWithItems
      )}
    >
      <Text fontSize="lg">{children}</Text>
      <div
        className={sprinkles({
          display: "flex",
          flexDirection: "column",
          gap: "6x",
          paddingLeft: "6x",
        })}
      >
        <div
          className={sprinkles({
            display: "flex",
            gap: "2x",
            flexDirection: "column",
          })}
        >
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              item={{ id: task.id, content: task.title }}
              onRemove={removeTask}
            />
          ))}
        </div>
        {isAddingItem ? (
          <AddItemTextInput
            onCancel={() => setIsAddingItem(false)}
            onAdd={handleAddItem}
          />
        ) : (
          <AddItemButton onClick={() => setIsAddingItem(true)} />
        )}
      </div>
    </div>
  );
};

export default memo(QuestionWithItems);
