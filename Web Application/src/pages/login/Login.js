import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import './Login.css'
import logo1 from '../assets/logo1.png'
import { useState } from 'react';


const openNotification = (notification_title, notification_message) => {
  notification.open({
    message: notification_title,
    description: notification_message,
    placement: 'bottomLeft',
    icon: (
      <SmileOutlined
        style={{
          color: '#108ee9',
        }}
      />
    ),
  });
};


export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();


  const onFinish = async (values) => {

    // console.log('Received values of form: ', values);
    if (username !== "" && password !== "") {

      // let response = await fetch('http://192.168.1.36:6969/Doctor/LoginDoctor/' + username + '/' + password + '', {   //BunnySniper
      // let response = await fetch('http://192.168.100.7:6969/Doctor/LoginDoctor/' + username + '/' + password + '', {   //Behzad Home
      // let response = await fetch('http:/192.168.1.116:6969/Doctor/LoginDoctor/' + username + '/' + password + '', {   //Behzad Charji
      let response = await fetch('http://172.0.3.3:6969/Doctor/LoginDoctor/' + username + '/' + password + '', {     //CUI
      // let response = await fetch('http://192.168.43.112:6969/Doctor/LoginDoctor/' + username + '/' + password + '', {     //Super 69
      // let response = await fetch('http://172.27.176.1:6969/Doctor/LoginDoctor/' + username + '/' + password + '', {     //usman flat
        // let response = await fetch('http://192.168.137.1:6969/Doctor/LoginDoctor/' + username + '/' + password + '', {     //Dhother
        method: 'POST',
        headers: {
          Accept: 'application/json',
        }
      });
      let json = await response.json();
      if (json["Message"] === "False") {
        openNotification("MedXpert", "Oops! You entered wrong credentials. Please try again.")
      }
      else if (json["Message"] === "True") {
        navigate("/HomePage");
        openNotification("MedXpert", "Login SuccessFully.....")
      }
      else {
        openNotification("MedXpert", "Unknown Error Occured")
      }
    }
    else {
      openNotification("MedXpert", "Please fill all the fields.")
    }
  };

  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}>

        <img className='logo' src={logo1} alt="" />
        <h2 className='h2'>Login to your account</h2>
        <p className='p1'>Don't have an account yet? <Link to='./Signup' className="SignupLink">
          Signup
        </Link></p>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} className="InputCss" placeholder="Username" onChange={(event) => { setusername(event.target.value) }} value={username} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={(event) => { setpassword(event.target.value) }} value={password}
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: 'white' }}>Remember me</Checkbox>
          </Form.Item>

          {/* <a className="login-form-forgot" href=''>
            Forgot password
          </a> */}
          <Link to='./HomePage' className="SignupLink">Forget Password</Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" shape='round' htmlType="submit"
            className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>

  );

}

