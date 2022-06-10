import "./image.scss";
export default (props: { maxHeight?: string; src: string; alt: string }) => {
  return (
    <img className='hsd-image' src={props.src} alt={props.alt || props.src} />
  );
};
