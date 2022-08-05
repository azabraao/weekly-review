import { memo } from "react";
import { textInput } from "./styles.css";

interface TextInputProps {
  autoFocus?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  autoFocus,
  onChange = () => {},
  onKeyDown = () => {},
  onBlur = () => {},
  value,
}: TextInputProps) => {
  return (
    <input
      autoFocus={autoFocus}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={textInput}
      type="text"
      placeholder="Write item. Press `esc` to cancel."
      value={value}
    />
  );
};

export default memo(TextInput);
