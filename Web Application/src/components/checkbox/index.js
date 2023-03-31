import { Checkbox } from "antd";
import "./style.css";
const CheckboxComponent = (props) => {
  return (
    <Checkbox label={props.label} className={props.className}>
      {props.text}
    </Checkbox>
  );
};
export default CheckboxComponent;
