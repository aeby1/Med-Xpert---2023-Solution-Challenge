import { Button, Checkbox, Form, Input, Select, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png'
import React, { useState } from 'react';
import './Signup.css'

const { Option } = Select;

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

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function Signup() {

  const [message, setMessage] = useState('');
  const [fullname, setFullName] = useState('');
  const [fathername, setFatherName] = useState('');
  // const [status, setStatus] = useState('');
  const [degree, setDegree] = useState('');
  const [cnic, setcnic] = useState('');
  const [telephone, settelephone] = useState('');
  const [gender, setgender] = useState('');
  const [department, setdepartment] = useState('');
  const [hospital, sethospital] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const MyFun = () => {
    const axios = require('axios');
    const params = new URLSearchParams()
    params.append('RegistrationNo', message);
    params.append('Name', '');
    params.append('FatherName', '');

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post('https://www.pmc.gov.pk/api/DRC/GetQualifications', params, config)
      .then((result) => {
        // console.log(result.data["data"]["RegistrationNo"]);
        // console.log(result.data["data"]["Name"]);
        // console.log(result.data["data"]["FatherName"]);
        // console.log(result.data["data"]["RegistrationType"]);
        // console.log(result.data["data"]["Qualifications"][0]["Degree"]);
        // console.log(result.data["data"]["Qualifications"][0]["University"]);
        // console.log(result.data["data"]["Qualifications"][0]["PassingYear"]);
        setFullName(result.data["data"]["Name"]);
        setFatherName(result.data["data"]["FatherName"]);
        // setStatus(result.data["data"]["Status"]);
        setDegree(result.data["data"]["Qualifications"][0]['Degree']);

      })
      .catch((err) => {
        console.log(err, "No Record Found");
      })
  };


  const handleChange = (event) => {
    setMessage(event.target.value)
  };

  const handleClick = event => {
    console.log("Full Name: ", fullname)
    event.preventDefault();
    MyFun();
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values, fullname, fathername, degree);


    var axios = require('axios');
    var data = JSON.stringify({
      LicenseNo: message,
      FullName: fullname,
      FatherName: fathername,
      Degree: degree,
      Hospital: hospital,
      Department: department,
      PhoneNo: telephone,
      CNIC: cnic,
      Gender: gender,
      Email: email,
      Password: password,
    });


    var config = {
      mode: 'no-cors',
      method: 'post',
      // url: 'http://192.168.1.178:6969/Doctor/SignUp/',
      // url: 'http://192.168.1.116:6969/Doctor/SignUp/', //Behzad Charji
      // url: 'http://192.168.1.38:6969/Doctor/SignUp/', //BunnySniper
      // url: 'http:// 192.168.43.112:6969/Doctor/SignUp/', //Super 69
      url: 'http://172.0.3.3:6969/Doctor/SignUp/', //CUI
      // url: 'http://172.27.176.1:6969/Doctor/SignUp/', //Usman flat
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        openNotification("MedXpert", "Signup SuccessFully.....")
      })
      .catch(function (error) {
        console.log(error);
        openNotification("MedXpert", "Error Signing Up.....")
      });

  };



  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        className='signup-form'
        scrollToFirstError

      >
        <img className='logo' src={logo1} alt="" />
        <h2 className='h2'>Signup to your account</h2>
        <p className='p1'>Already have an account? <Link to='/' className="LoginLink">
          Login
        </Link></p>

        <Form.Item
          name="regno"
          rules={[
            {
              required: true,
              message: 'Please input your Doctor License Number!',
            },
          ]}
        >
          <Input
            placeholder='License Number (PMC Verified)'
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
          />
        </Form.Item>
        <Button type='primary' className='verify-button' shape='round' onClick={handleClick} >Verify</Button>

        <Form.Item
          // name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your Full Name!',
            },
          ]}
        >
          <Input id='fullname' placeholder='Full Name' value={fullname} />

        </Form.Item>

        <Form.Item
          // name="fathername"
          rules={[
            {
              required: true,
              message: 'Please input your Full Name!',
            },
          ]}
        >
          <Input id='fathername' placeholder='Father Name' value={fathername} />

        </Form.Item>

        <Form.Item
          // name="degree"
          rules={[
            {
              required: true,
              message: 'Please input your Full Name!',
            },
          ]}
        >
          <Input id='degree' placeholder='Qualification' value={degree} />

        </Form.Item>

        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your Address!',
            },
          ]}
        >
          <Input placeholder='Hospital Address' onChange={(event) => { sethospital(event.target.value) }} value={hospital} />
        </Form.Item>

        <Form.Item
          name="department"
          rules={[
            {
              required: true,
              message: 'Please input your Department!',
            },
          ]}
        >
          <Input placeholder='Department' onChange={(event) => { setdepartment(event.target.value) }} value={department} />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input

            placeholder='Phone Number' onChange={(event) => { settelephone(event.target.value) }} value={telephone}
          />
        </Form.Item>

        <Form.Item
          name="cnic"
          rules={[
            {
              required: true,
              message: 'Please input your cnic!',
            },
          ]}
        >
          <Input

            placeholder='CNIC' onChange={(event) => { setcnic(event.target.value) }} value={cnic}
          />
        </Form.Item>

        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select style={{ color: 'black !important', background: 'transparent !important' }} placeholder="Select your Gender" onSelect={(value) => setgender(value)}
            value={gender}>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>


        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder='Email' onChange={(event) => { setemail(event.target.value) }} value={email} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Password' onChange={(event) => { setpassword(event.target.value) }} value={password} />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder='Confirm Password' />
        </Form.Item>


        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox style={{ color: 'white' }}>
            I have read the <a className='a1' style={{ color: 'bisque' }} href="">Agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item
        >
          <Button className='submitButton' shape='round' type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

