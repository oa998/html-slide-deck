import { ReactNode } from "react";

export default ({
  children,
  gridArea,
}: {
  children: ReactNode;
  gridArea?: string;
}) => {
  const MARGIN = "2%";
  return (
    <div
      style={{
        gridArea: gridArea,
        display: "grid",
        justifyItems: "center",
        alignContent: "space-evenly",
        gap: "10px",
        margin: MARGIN,
        height: `calc(100% - 2 * ${MARGIN})`,
      }}
    >
      {children}
    </div>
  );
};
