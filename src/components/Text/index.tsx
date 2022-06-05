import { ReactNode } from "react";
import "./text.css";

type TextProps = {
  fontSize?: string;
  bold?: boolean;
  children: ReactNode;
};

const Text = ({ fontSize, bold, children }: TextProps) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold ? "600" : "400",
        minWidth: "100px",
        maxWidth: "1000px",
      }}
      className='hsd-text'
    >
      {children}
    </div>
  );
};

export const T1 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='0.5em'>
    {children}
  </Text>
);
export const T2 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='0.75em'>
    {children}
  </Text>
);
export const T3 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='1em'>
    {children}
  </Text>
);
export const T4 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='1.25em'>
    {children}
  </Text>
);
export const T5 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='1.5em'>
    {children}
  </Text>
);
export const T6 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='2em'>
    {children}
  </Text>
);
export const T7 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='2.5em'>
    {children}
  </Text>
);
export const T8 = ({ children, ...props }: TextProps) => (
  <Text {...props} fontSize='3em'>
    {children}
  </Text>
);
