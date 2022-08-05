import { memo } from "react";
import { link } from "./styles.css";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const Link = ({ href, children, target }: LinkProps) => {
  return (
    <a
      onClick={(e) => e.stopPropagation()}
      href={href}
      className={link}
      target={target}
    >
      {children}
    </a>
  );
};

export default memo(Link);
