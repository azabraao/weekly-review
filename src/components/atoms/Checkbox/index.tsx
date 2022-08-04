import { memo } from "react";

interface CheckboxProps {
  checked?: boolean;
  onClick?: () => void;
}

const Checkbox = ({ checked = false, onClick }: CheckboxProps) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      {checked && (
        <path
          d="M7 11.5818L9.28571 13.9091L15 8.09088"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      <rect
        x={1}
        y={1}
        width={20}
        height={20}
        rx={2}
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
};

export default memo(Checkbox);
