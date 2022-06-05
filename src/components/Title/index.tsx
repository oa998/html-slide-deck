import { ReactNode } from "react";
import "./title.css";

export default ({ children }: { children: ReactNode }) => {
  return <div className='hsd-title'>{children}</div>;
};
