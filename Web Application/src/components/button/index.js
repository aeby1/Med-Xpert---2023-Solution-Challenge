import { Button } from "antd";
import "./style.css";
const ButtonComponent = (props) => {
  return (
    <Button prefix={props.prefix} onClick={props.onClick} type={props.type} className={props.className}>
      {props.text}
    </Button>
  );
};
export default ButtonComponent;
