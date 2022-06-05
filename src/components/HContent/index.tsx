import { ReactNode } from "react";

export default ({
  gridArea,
  cols,
  children,
}: {
  gridArea?: string;
  cols?: number;
  children: ReactNode;
}) => {
  // cols = 2
  return (
    <div
      style={{
        gridArea: gridArea,
        display: "grid",
        gridTemplateColumns: Array(cols || 2)
          .fill("1fr")
          .join(" "),
        justifyItems: "center",
        alignItems: "center",
        gap: "10px",
        margin: "2%",
      }}
    >
      {children}
    </div>
  );
};
