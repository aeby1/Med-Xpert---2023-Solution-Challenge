import {    InboxOutlined  } from '@ant-design/icons';
  
  import '../files/files.css';

  import {Card, Col, Row, Button, Layout,Table, Space, message, Upload} from 'antd';
  import React, { useState } from 'react';
  const {  Content, Footer } = Layout;
  
  const { Dragger } = Upload;
  const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    const { status } = info.file;
  
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
  
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
  };
  
  const options = [];
  
  for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({
      label: `Long Label: ${value}`,
      value,
    });
  }
  
  const PatientDashboard = () => {
  
  
    const [cartCheck, setCartCheck] = useState(false)
    const cartBtn = () => {
   
    }
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
      }
    ]
      
      return (
  
       
        <Layout
        style={{
          minHeight: '100vh',
        }}
      >
       
        
        <Layout className="site-layout">
         
          <Content className='patient_dashboard_body' >
            
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 200,
              }}
            >
              <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Upload X-Ray" bordered={false}>
          <Dragger {...props} accept=".pdf,.doc,.docx,.txt">
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
  <Button type='primary' style={{marginTop:'10px'}}>submit</Button>
  </Card>
        </Col>
       
      </Row>
    </div>
    
            </div>
  
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 200,
              }}
            >
              <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Upload medical record" bordered={false}>
          <Dragger {...props} >
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
  <Button type='primary' style={{marginTop:'10px'}}>submit</Button>
  </Card>
        </Col>
       
      </Row>
    </div>
    
            </div>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 200,
              }}
            >
              <div className="site-card-wrapper">
  
      <Row gutter={16}>
        <Col span={24}>
          <Card className='cards' title="uploaded files" bordered={true}>
          <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Button className='disease name' onClick={()=> cartBtn()} type='primary'>View uploaded files </Button>
      {cartCheck &&  
      <Table 
      columns={columns}
      pagination={false}
     />
     }
     
    </Space>
          </Card>
        </Col>
        </Row>
  
    </div>
    
            </div>
          
          </Content>
  
  
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            medXpert ©2022 Created by TeamX
          </Footer>
        </Layout>
      </Layout>
   
          
          );
  }
  export default PatientDashboard;