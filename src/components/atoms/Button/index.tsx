import { memo } from "react";
import { button } from "./styles.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={button}>
      {children}
    </button>
  );
};

export default memo(Button);
