import { Input } from "antd";
import "./style.css";
const InputComponent = (props) => {
  return (
    <Input placeholder={props.placeholder} prefix={props.prefix} type={props.type} className={props.className}>
      {props.text}
    </Input>
  );
};
export default InputComponent;
