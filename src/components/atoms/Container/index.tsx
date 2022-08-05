import { memo } from "react";
import { sprinkles } from "styles/sprinkles.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={sprinkles({
        width: "100%",
        maxWidth: "1000px",
        paddingLeft: "4x",
        paddingRight: "4x",
        margin: "0 auto",
      })}
    >
      {children}
    </div>
  );
};

export default memo(Container);
