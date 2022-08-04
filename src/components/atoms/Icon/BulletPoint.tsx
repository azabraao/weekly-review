import { memo } from "react";
import { sprinkles } from "sprinkles.css";

const BulletPoint = () => {
  return (
    <div
      className={sprinkles({
        background: {
          lightMode: "slate-900",
          darkMode: "white",
        },
        borderRadius: "2x",
      })}
      style={{
        width: 8,
        height: 8,
      }}
    />
  );
};

export default memo(BulletPoint);
