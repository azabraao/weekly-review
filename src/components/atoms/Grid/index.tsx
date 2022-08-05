import { memo } from "react";
import "styles/app.css";
import { sprinkles } from "styles/sprinkles.css";
import { vars } from "styles/vars.css";

interface GridProps {
  children: React.ReactNode;
}

interface ColumnProps {
  children: React.ReactNode;
  flex: keyof typeof vars.flex;
}

export const Column = ({ children, flex }: ColumnProps) => {
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

const Grid = ({ children }: GridProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: {
          mobile: "column",
          desktop: "row",
        },
        gap: "20x",
        paddingBottom: "20x",
      })}
    >
      {children}
    </div>
  );
};

export default memo(Grid);
