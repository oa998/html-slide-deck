import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        gridArea: "title",
        width: "100%",
        // height: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "repeat(auto)",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
