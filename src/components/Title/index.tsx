import { ReactNode } from "react";
import "./title.scss";

export default ({ children }: { children: ReactNode }) => {
  return <div className='hsd-title'>{children}</div>;
};
