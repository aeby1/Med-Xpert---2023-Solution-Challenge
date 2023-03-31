import { DatePicker, Layout, Button, Avatar, Modal, Descriptions, Input, Table, Tag, Space, Drawer, Image, Card, Col, Row, Tooltip, Dropdown, Menu, Typography } from 'antd';
import { UserOutlined, MoreOutlined, ThunderboltTwoTone, DownloadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { React, useState } from 'react';
import Logo from '../assets/logo1.png'
import doctorIcon1 from '../assets/doctorIcon1.svg'
import digibio from '../assets/fingerprint.jpeg'
import ice from '../assets/ice1.jpeg'

import './HomePage.css'
import { Link } from 'react-router-dom';
import MicTest from '../../content/micTesting.js/MicTesting.js';
// import Dashboard from '../dashboard/Dashboard.js'


const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Meta } = Card;

const { Text, Title } = Typography;


const App = () => {

  const[data, setdata] = useState([]);

  const onSearch = async(value) => {

    console.log("I searched"+value);
    if (value !== "") {
  
      // let response = await fetch('http://172.27.176.1:6969/Doctor/get_patient_by_mrid/' + value , {     //usman flat
      // let response = await fetch('http://192.168.43.112:6969/Doctor/get_patient_by_mrid/' + value , {     //Super 69
      let response = await fetch('http://172.0.3.3:6969/Doctor/get_patient_by_mrid/' + value , {     //CUI
     
      method: 'POST',
      headers: {
        Accept: 'application/json',
      }
    });
    let json = await response.json();
    
    const item = {
      key: '69',
      name: json['Patient Found'][0]['Name'],
      mrno: json['Patient Found'][0]['MrId'],
      age: json['Patient Found'][0]['Age'],
      address: ' Comsats Attock',
      tags: ['MALE'],
    }
    console.log(item)
    setdata([...data,item]);
    console.log(data);
    }
    else{
     console.log("Please enter the mr number of the patient.")
    }
  
  
  
  
  
  };


  //Modal Functions startes here
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDrawer = () => {
    setSize('large');
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
    setIsModalVisible1(true);
    setIsModalVisible2(true);
    setIsModalVisible3(true);
    setIsModalVisible4(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setIsModalVisible1(false);
    setIsModalVisible2(false);
    setIsModalVisible3(false);
    setIsModalVisible4(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setIsModalVisible1(false);
    setIsModalVisible2(false);
    setIsModalVisible3(false);
    setIsModalVisible4(false);
    
  };
  //Modal Functions ends here

  //Table Functions start here
  const columns = [
    {
      title: 'Patient Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) =>
        <Tooltip title="Click For Assessment Form" color='#22a0db' placement="right">
          <Link to="/Dashboard"> {text} </Link>
        </Tooltip>,
    },
    {
      title: 'MR No',
      dataIndex: 'mrno',
      key: 'mrno',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Gender',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';

            if (tag === 'loser') {
              color = 'volcano';
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button shape='circle' onClick={showDrawer}><UserOutlined /></Button>
          <Dropdown overlay={menu} placement="bottom"><Button shape='circle'><MoreOutlined /></Button></Dropdown>
          <Button shape='round' onClick={setIsModalVisible3}><ThunderboltTwoTone />Quick Check-Up</Button>
        </Space>
      ),
    },
  ];
  // var data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     mrno: 123456,
  //     age: 32,
  //     address: ' New York No. 1 Lake Park New York No. 1 Lake Park',
  //     tags: ['MALE'],
  //   },
  //   {
  //     key: '69',
  //     name: 'Behzad Qasim',
  //     mrno: 123456,
  //     age: 32,
  //     address: ' New York No. 1 Lake Park New York No. 1 Lake Park',
  //     tags: ['MALE'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     mrno: 654321,
  //     age: 42,
  //     address: 'London No. 1 Lake Park London No London No. 1 Lake Park',
  //     tags: ['FEMALE'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     mrno: 321456,
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park Sidney No. 1 Lake Park',
  //     tags: ['MALE'],
  //   },
  //   {
  //     key: '4',
  //     name: 'Joe Black',
  //     mrno: 321456,
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park Sidney No. 1 Lake Park',
  //     tags: ['FEMALE'],
  //   },
  //   {
  //     key: '5',
  //     name: 'Joe Black',
  //     mrno: 321456,
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park Sidney No. 1 Lake Park',
  //     tags: ['MALE'],
  //   },
  // ];
  //Table Functions start here

  const menu = (
    <Menu
      items={[
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ]}
    />
  );


  return (

    <Layout className="layout">
      <Header>
        <img className='logo1' src={Logo} alt="" />
        <Avatar size={'large'} onClick={setIsModalVisible2} style={{ float: 'right', margin: '11px 0 0 10px', backgroundColor: "#22a0db", border: '2px solid #d81720' }}> <Image src={doctorIcon1} preview={false} style={{ width: '28px', marginTop: '2px' }}></Image></Avatar>
        <Modal title="Doctor Profile" visible={isModalVisible2} onOk={handleOk} onCancel={handleCancel} width={1200} centered className='doctorModal'>
          <Row gutter={16}>
            <Col span={6}>
              <Card hoverable style={{ width: 240, height: 400 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <Meta title="Doctor Flashy" description="www.instagram.com" />
              </Card>
            </Col>

            <Col span={10}>
              <Card hoverable style={{ width: 440, height: 400 }}>
                <h3>Registration No: </h3>
                <h3>Full Name: </h3>
                <h3>Father Name:</h3>
                <h3>Mobile: </h3>
                <h3>Address: </h3>
                <h3>Qualification: </h3>
                <h3>Hospital: </h3>
                <Button style={{ float: 'left' }} ><DownloadOutlined /></Button>
              </Card>
            </Col>
          </Row>
        </Modal>

        <Button className='searchPatient' onClick={setIsModalVisible1} style={{ backgroundColor: "#22a0db", fontWeight: 'bold', borderColor: "black", float: 'right', margin: '15px 5px 0 0' }}  >SEARCH PATIENT</Button>
        <Modal title="Search Patient" visible={isModalVisible1} onOk={handleOk} onCancel={handleCancel}>
          <Search
            placeholder="Enter MR No."
            onSearch={onSearch}
            style={{
              width: '100%',
            }}
          />
        </Modal>

        <Button className='newPatient' onClick={setIsModalVisible} style={{ backgroundColor: "#22a0db", borderColor: "black", fontWeight: 'bold', float: 'right', margin: '15px 5px 0 0' }}  >CREATE NEW VISIT</Button>
        <Modal title="New Patient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Search
            placeholder="Enter MR No."
            onSearch={onSearch}
            style={{
              width: '100%',
            }}
          />
        </Modal>
        <DatePicker defaultValue={moment} className='dateac' style={{ float: 'right', margin: '15px 5px 0 0', borderColor: "black", height: '31.5px', fontWeight: 'bold' }} />

        <Avatar src={digibio} size={'large'} onClick={setIsModalVisible4} style={{ float: 'right', margin: '11px 10px 0 10px', backgroundColor: "#22a0db", border: '2px solid #d81720' }}> </Avatar>
        <Modal title="Bio-Metric Scan" visible={isModalVisible4} onOk={handleOk} onCancel={handleCancel} centered className='bioModal'>
          <Image preview={false} src={digibio} className="fingerPic"></Image>
          <h2 className='bio_heading'>Please place your thumb on the scanner</h2>
          <Button className='biobtn' type='primary'>view details</Button>
          <Button className='icebtn'><Image src={ice} preview={false}></Image></Button>
          
          
        </Modal>
      </Header>

      <Content
        style={{
          padding: '50px 50px',
        }}
      >
        <div className="site-layout-content">
          Appointment List
        </div>
        <Table className='tables' columns={columns} dataSource={data} />
        <Drawer size={size} title="Patient Profile" className='patientDrawer' placement="bottom" onClose={onClose} visible={visible}>
          <Card
            style={{
              width: 500, height: 500, backgroundColor: '#F0F8FF',
            }}
          >
            <Avatar size={{ xxl: 100 }} style={{ float: "left", backgroundColor: "#22a0db", border: '2px solid #d81720' }}  ><Image src={doctorIcon1} preview={false} style={{ width: '78px', marginTop: '2px' }}></Image></Avatar>
            <Title level={3} style={{ float: "left", marginLeft: "1%", marginTop: "5%" }}>Muhammad Ahmed</Title>
            <Descriptions >
              <Descriptions.Item label="MR #">Cloud Database</Descriptions.Item>
              <Descriptions.Item label="Age" >Cloud Database</Descriptions.Item>
              <Descriptions.Item label="Cell">Cloud Database</Descriptions.Item>
              <Descriptions.Item label="Blood">Cloud Database</Descriptions.Item>
              <Descriptions.Item label="Status">Cloud Database</Descriptions.Item>
              <Descriptions.Item label="Apt Date">Cloud Database</Descriptions.Item>
            </Descriptions>
          </Card>
        </Drawer>

        <Modal title="Check-Up Form" visible={isModalVisible3} onOk={handleOk} onCancel={handleCancel}>
          <MicTest />
        </Modal>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        MedXpert ©2022 Created by TeamX. All Rights Reserved
      </Footer>
    </Layout>
  );
}
export default App;