import { ReactNode, useMemo } from "react";

export default ({
  children,
  columnPercentRatios = ["100%"],
  withTitle = false,
}: {
  children: ReactNode;
  columnPercentRatios?: string[];
  withTitle?: boolean;
}) => {
  const style = useMemo(() => {
    let obj = {
      height: "95%",
      width: "100%",
      maxHeight: "95%",
      maxWidth: "100%",
      display: "grid",
      gridTemplateAreas: "",
      gridTemplateRows: "",
      gridTemplateColumns: "",
    };

    const displayColumns = Array(columnPercentRatios.length)
      .fill("")
      .map((_, i) => String.fromCharCode(97 + i))
      .join(" ");

    if (withTitle) {
      const titleColumns = Array(columnPercentRatios.length)
        .fill("title")
        .join(" ");
      /* i.e. '"title title" "a b"' */
      obj.gridTemplateAreas = `"${titleColumns}" "${displayColumns}"`;
      obj.gridTemplateRows = `10% 1fr`;
    } else {
      obj.gridTemplateAreas = `"${displayColumns}"`;
      obj.gridTemplateRows = `1fr`;
    }
    obj.gridTemplateColumns = columnPercentRatios.join(" ");
    return obj;
  }, [columnPercentRatios, withTitle]);

  return <div style={style}>{children}</div>;
};
