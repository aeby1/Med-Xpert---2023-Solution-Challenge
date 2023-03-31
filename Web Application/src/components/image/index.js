import { Image } from "antd";
const ImageComponent = (props) => {
  return (
    <Image className={props.className} src={props.src} alt={props.alt} preview={props.preview}>
    </Image>
  );
};
export default ImageComponent;
