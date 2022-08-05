import { memo } from "react";
import { sprinkles } from "styles/sprinkles.css";
import { levelToFontSize, levelToLineHeight } from "utils";
import { vars } from "styles/vars.css";

interface TitleProps {
  children: React.ReactNode;
  level: HeadingLevel;
  paddingTop?: keyof typeof vars.space;
  paddingBottom?: keyof typeof vars.space;
}

const Title = ({ level, children, paddingTop, paddingBottom }: TitleProps) => {
  const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;

  const fontSize = levelToFontSize(level);
  const lineHeight = levelToLineHeight(level);

  return (
    <CustomTag
      className={sprinkles({
        fontSize,
        lineHeight,
        paddingTop,
        paddingBottom,
      })}
    >
      {children}
    </CustomTag>
  );
};

export default memo(Title);
