import { memo } from "react";
import { PlusIcon, Text } from "components/atoms";
import { sprinkles } from "styles/sprinkles.css";

interface AddItemButtonProps {
  onClick: () => void;
}

const AddItemButton = ({ onClick }: AddItemButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={sprinkles({
        display: "flex",
        alignItems: "center",
        gap: "2x",
        cursor: "pointer",
        width: "fit-content",
      })}
    >
      <PlusIcon />
      <Text>Add new item</Text>
    </div>
  );
};

export default memo(AddItemButton);
