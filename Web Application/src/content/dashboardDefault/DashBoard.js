import React from 'react'
import { Card, Col, Row, Avatar, Descriptions, Timeline, List, Typography} from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import doctorIcon1 from '../../pages/assets/doctorIcon1.svg'

const data = [
    "User 1 is allergic to peanuts.",
    "User 2 is dibateic patient.",
    "User 3 has asthama.",
    "User 4 need insulin Twice a month.",
    "Bonapitito.",
];
const { Text, Title } = Typography;


function DashBoard() {
    const options = {
        chart: {
            height: 250,
            width: 750,
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "Medical History",
        },
        xAxis: {
            type: "datetime",
            labels: {
                enabled: true,
            },
        },
        series: [
            {
                type: "line",
                name: "",
                marker: {
                    enabled: false,
                },
                label: {
                    enables: false,
                },
                color: "#3F6DAA",
                data: [
                    [1660244400000, 3.8],
                    [1659294000000, 3.3],
                    [1659207600000, 3.4],
                    [1659294000000, 3.7],
                    [1659121200000, 4.2],
                ],
            },
        ],
    };

  return (
    <>
    <div
    className="site-layout-background"
    style={{
        padding: 24,
        minHeight: 200,
    }}
>
    <div className="site-card-wrapper">
        <Row gutter={16}>
            <Col span={8}>
                <Card className="userinfo" title="Patient Information" bordered={true} >
                    <Avatar
                        size={{
                            xs: 28,
                            sm: 30,
                            md: 40,
                            lg: 60,
                            xl: 70,
                            xxl: 90,
                        }}
                        src={doctorIcon1}
                        style={{ float: "left", marginRight: "1%", marginTop: "0.5%" }}
                    ></Avatar>
                    <Title level={3} style={{ float: "left", marginLeft: "1%", marginTop: "5%" }}>Muhammad Ahmed</Title>
                    <Descriptions>
                        <Descriptions.Item >
                            <Text keyboard className="labels"> MR#</Text>
                        </Descriptions.Item>
                        <Descriptions.Item >
                            <Text keyboard className="labels"> Age</Text>
                        </Descriptions.Item>
                        <Descriptions.Item >
                            <Text keyboard className="labels"> Cell#</Text>
                        </Descriptions.Item>
                        <Descriptions.Item >
                            <Text keyboard className="labels"> Blood</Text>
                        </Descriptions.Item>
                        <Descriptions.Item >
                            <Text keyboard className="labels"> Status</Text>
                        </Descriptions.Item>
                        <Descriptions.Item >
                            <Text keyboard className="labels"> Reg Date</Text>
                        </Descriptions.Item>

                    </Descriptions>
                </Card>
            </Col>
            <Col span={16}>
                <Card title="Previous Visits" bordered={false}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
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
            <Col span={8}>
                <Card title="Family History" bordered={true}>
                    <List
                        className="Mhistory"
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="Previous Medical History"
                    className="MHcard"
                    bordered={false}
                >
                    <List
                        className="Mhistory"
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Timeline" bordered={false}>
                    <Timeline className="timeline">
                        <Timeline.Item>
                            Create a services site 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Solve initial network problems 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Network problems being solved 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Create a services site 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Solve initial network problems 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Network problems being solved 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Create a services site 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Solve initial network problems 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>
                            Network problems being solved 2015-09-01
                        </Timeline.Item>
                    </Timeline>

                </Card>
            </Col>
        </Row>
    </div>
</div>
</>
  )
}

export default DashBoard