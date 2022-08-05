import { Checkbox } from "components/atoms";
import { memo, useCallback, useState } from "react";
import { sprinkles } from "styles/sprinkles.css";

interface ChecklistItemProps {
  children: React.ReactNode;
}

const ChecklistItem = ({ children }: ChecklistItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <div
      className={sprinkles({
        display: "flex",
        gap: "4x",
        alignItems: "center",
        color: {
          lightMode: isChecked ? "slate-500" : "slate-900",
          darkMode: isChecked ? "slate-400" : "white",
        },
        cursor: "pointer",
        textDecoration: isChecked ? "line-through" : "none",
        userSelect: "none",
      })}
      onClick={toggleChecked}
    >
      <Checkbox checked={isChecked} />
      <span>{children}</span>
    </div>
  );
};

export default memo(ChecklistItem);
