import { ReactNode } from "react";
import "./slide.scss";

export default ({ children }: { children: ReactNode }) => {
  return <div className='hsd-slide'>{children}</div>;
};
