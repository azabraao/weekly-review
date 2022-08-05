import { memo } from "react";
import { sprinkles } from "styles/sprinkles.css";
import { vars } from "styles/vars.css";

interface ColumnProps {
  children: React.ReactNode;
  flex: keyof typeof vars.flex;
}

const Column = ({ children, flex }: ColumnProps) => {
  return (
    <div
      className={sprinkles({
        flex,
      })}
    >
      {children}
    </div>
  );
};

export default memo(Column);
