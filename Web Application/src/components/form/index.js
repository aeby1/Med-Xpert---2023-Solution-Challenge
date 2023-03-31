import {Form} from "antd";
import './style.css'
const FormComponent=(props)=>{
return(
    <Form  className= {props.className}
    initialValues={props.initialValues}
    onFinish={props.onFinish}>  
    </Form>
)
}
export default FormComponent;