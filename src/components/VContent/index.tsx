import { ReactNode } from "react";
import "./VContent.scss";

export default ({ children }: { children: ReactNode }) => {
  return <div className='hsd-vcontent'>{children}</div>;
};
