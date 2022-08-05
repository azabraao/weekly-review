import { memo } from "react";
import { sprinkles } from "styles/sprinkles.css";
import { vars } from "vars.css";

interface TextProps {
  children: React.ReactNode;
  fontSize?: keyof typeof vars.fontSize;
}

const Text = ({ fontSize = "base", children }: TextProps) => {
  return (
    <p
      className={sprinkles({
        fontSize,
        lineHeight: fontSize,
      })}
    >
      {children}
    </p>
  );
};

export default memo(Text);
