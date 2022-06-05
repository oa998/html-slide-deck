export default (props: { maxHeight?: string; src: string; alt: string }) => {
  return (
    <img
      style={{
        height: "100%",
        maxWidth: "100%",
        maxHeight: props.maxHeight || "500px",
        objectFit: "contain",
      }}
      src={props.src}
      alt={props.alt || props.src}
    />
  );
};
