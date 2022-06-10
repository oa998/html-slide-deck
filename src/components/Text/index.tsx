import { ReactNode } from "react";
import "./text.scss";

type TextProps = {
  bold?: boolean;
  children: ReactNode;
  className?: string;
};

const Text = ({ bold, children }: TextProps) => {
  return <div className={`hsd-text ${bold ? "bold" : ""}`}>{children}</div>;
};

export const T1 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t1'>
    {children}
  </Text>
);
export const T2 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t2'>
    {children}
  </Text>
);
export const T3 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t3'>
    {children}
  </Text>
);
export const T4 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t4'>
    {children}
  </Text>
);
export const T5 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t5'>
    {children}
  </Text>
);
export const T6 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t6'>
    {children}
  </Text>
);
export const T7 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t7'>
    {children}
  </Text>
);
export const T8 = ({ children, ...props }: TextProps) => (
  <Text {...props} className='t8'>
    {children}
  </Text>
);
