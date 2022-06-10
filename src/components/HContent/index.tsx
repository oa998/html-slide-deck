import { ReactNode } from "react";
import "./HContent.scss";

export default ({ children }: { children: ReactNode }) => {
  return <div className='hsd-hcontent'>{children}</div>;
};
