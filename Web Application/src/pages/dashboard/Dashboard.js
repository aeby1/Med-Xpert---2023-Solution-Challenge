import { DesktopOutlined, FileOutlined, TeamOutlined, MonitorOutlined } from "@ant-design/icons";
import Logo from '../assets/logo1.png';
import "./Dashboard.css";
import doctorIcon1 from '../assets/doctorIcon1.svg';
import { Button, Avatar, Layout, Menu, Image } from "antd";

import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import DashBoard from "../../content/dashboardDefault/DashBoard";
import Diagnosis from "../../content/diagnosis/Diagnosis.js"
import Diagnostics from "../../content/diagnostics/Diagnostics.js"

const { Header, Content, Footer, Sider } = Layout;



const PatientDashboard = () => {
    // const [isModalVisible2, setIsModalVisible2] = useState(false);
    // const [visible, setVisible] = useState(false);
    // const showDrawer = () => {
    //     setVisible(true);
    //   };

    //   const onClose = () => {
    //     setVisible(false);
    //   };

    //   const showModal = () => {
    //     setIsModalVisible2(true);
    //   };
    //   const handleOk = () => {
    //     setIsModalVisible2(false);
    //   };
    //   const handleCancel = () => {
    //     setIsModalVisible2(false);
    //   };
    const navigate = useNavigate();
    function Contents(){
        return(
            <div>
                <Routes>
                    <Route path='/' element={<DashBoard />} ></Route>
                    <Route path='/diagnosis' element={<Diagnosis />} ></Route>
                    <Route path='/diagnostics' element={<Diagnostics />} ></Route>    
                </Routes>
            </div>
        );
    }

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >

                <Menu
                    theme="dark"
                    defaultSelectedKeys={["/"]}
                    mode="inline"
                    onClick={({key})=>{
                       navigate(key);
                    }}

                    items={[
                        {
                            key: '/Dashboard',
                            icon: <DesktopOutlined />,
                            label: 'DashBoard',
                        },
                        {
                            key: '/diagnosis',
                            icon: <FileOutlined />,
                            label: 'Patient Diagnosis',
                        },
                        {
                            key: '/diagnostics',
                            icon: <MonitorOutlined />,
                            label: 'Patient Diagnostics',
                        },
                        {
                            key: '/files',
                            icon: <TeamOutlined />,
                            label: 'Files',
                        },
                    ]}
                />
            </Sider>

            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <img className="dashboardlogo" src={Logo} alt="" />
                    <div onClick={(e) => e.preventDefault()}>

                        <Avatar size={'large'} /*onClick={setIsModalVisible2}*/ style={{ float: 'right', margin: '11px 0px 0 10px', backgroundColor: "#22a0db", border: '2px solid #d81720' }}> <Image src={doctorIcon1} preview={false} style={{ width: '28px', marginTop: '2px' }}></Image></Avatar>

                    </div>
                    <Link to="/homepage">
                        <Button className='backbutton' style={{ backgroundColor: "#22a0db", fontWeight: 'bold', borderColor: "black", float: 'right', margin: '15px 5px 0 0' }}>Homescreen</Button>
                    </Link>
                </Header>
                <Content
                    style={{
                        margin: "0 16px",
                    }}
                >
                    {/* <DashBoard /> */}
                    <Contents />
                </Content>

                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    medXpert ©2022 Created by TeamX
                </Footer>
            </Layout>
        </Layout>
    );
};
export default PatientDashboard;