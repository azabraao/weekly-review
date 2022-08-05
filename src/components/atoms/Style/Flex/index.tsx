import { memo } from "react";

import { responsiveProperties, sprinkles } from "styles/sprinkles.css";

interface FlexStyleProps {
  children: React.ReactNode;
  direction: keyof typeof responsiveProperties.styles.flexDirection.values;
}

const FlexStyle = ({ children, direction = "row" }: FlexStyleProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: direction,
      })}
    >
      {children}
    </div>
  );
};

export default memo(FlexStyle);
