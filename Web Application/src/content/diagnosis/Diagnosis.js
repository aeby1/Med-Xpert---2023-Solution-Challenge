import "../diagnosis/Diagnosis.css";

import Avatr from "../../pages/assets/doctorIcon1.svg";
import {Typography,Card,Col,Row,Avatar,Button,Layout,Descriptions,Input,Select,Table,Checkbox} from "antd";
import React, { useState } from "react";
const { Content, Footer } = Layout;
const { TextArea } = Input;
const { Option } = Select;
const onChecked = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const { Text, Title } = Typography;
// const addPresciption = () => {
//   <Table
//     pagination={false}
//     columns={columns2}
//     dataSource={dataSource2}
//   ></Table>;
// };
//table for prescription
const dataSource2 = [
  {
    key: "1",
    name: "med",
    today: "medT",
  },
];

const columns2 = [
  {
    title: "Medication",
    dataIndex: "Medication",
    key: "medication",
    render: (text) => <Input>{text}</Input>,
  },
  {
    title: "Form",
    dataIndex: "Form",
    key: "Form",
    render: (text) => <Input className="med_form">{text}</Input>,
  },
  {
    title: "Dosage",
    dataIndex: "Dosage",
    key: "Dosage",
    render: (text) => (
      <Select prefix={"hh"} className="med_dosage">
        {text}
        <Option>{text}</Option>
        <Option>{text}</Option>
        <Option>{text}</Option>
      </Select>
    ),
  },
  {
    title: "Frequency",
    dataIndex: "Frequency",
    key: "Frequency",
    render: (text) => <Input className="med_form">{text}</Input>,
  },
  {
    title: "Length",
    dataIndex: "Length",
    key: "Length",
    render: (text) => <Input className="med_form">{text}</Input>,
  },
];

const dataSource = [
  {
    key: "1",
    name: "BP(Systolic)",
    today: <Input className="vitalsText"></Input>,
    previous: "123",
  },
  {
    key: "2",
    name: "BP(Diastolic)",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "3",
    name: "Weight(lbs)",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "4",
    name: "Height (cm)",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "5",
    name: "temperature(C)",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "6",
    name: "Fall Risk",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "7",
    name: "BMI",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "8",
    name: "Functional Assessment",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "9",
    name: "Nutritional Screening Risk",
    today: <Input className=""></Input>,
    previous: "80",
  },
  {
    key: "10",
    name: "Nutritional Score",
    today: <Input className=""></Input>,
    previous: "80",
  },
];
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const onChange = (e) => {
  console.log("Change:", e.target.value);
};



const options = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

const Diagnosis = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
  ];

  const [value, setValue] = useState(["a10", "c12", "h17", "j19", "k20"]);
  const selectProps = {
    mode: "multiple",
    style: {
      width: "100%",
    },
    value,
    options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: "Select Item...",
    maxTagCount: "responsive",
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >

      <Layout className="site-layout">

        <Content className="patient_dashboard_body">
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
                  <Card
                    className="userinfo"
                    title="Patient Info"
                    bordered={false}
                  >
                    <Avatar
                      size={{
                        xs: 28,
                        sm: 30,
                        md: 40,
                        lg: 60,
                        xl: 70,
                        xxl: 90,
                      }}
                      src={Avatr}
                      style={{
                        float: "left",
                        marginRight: "1%",
                        marginTop: "0.5%",
                      }}
                    ></Avatar>
                    <Title
                      level={3}
                      style={{
                        float: "left",
                        marginLeft: "1%",
                        marginTop: "5%",
                      }}
                    >
                      Muhammad Ahmed
                    </Title>
                    <Descriptions>
                      <Descriptions.Item>
                        <Text keyboard className="labels">
                          {" "}
                          MR#
                        </Text>
                      </Descriptions.Item>
                      <Descriptions.Item>
                        <Text keyboard className="labels">
                          {" "}
                          Age
                        </Text>
                      </Descriptions.Item>
                      <Descriptions.Item>
                        <Text keyboard className="labels">
                          {" "}
                          Cell#
                        </Text>
                      </Descriptions.Item>
                      <Descriptions.Item>
                        <Text keyboard className="labels">
                          {" "}
                          Blood
                        </Text>
                      </Descriptions.Item>
                      <Descriptions.Item>
                        <Text keyboard className="labels">
                          {" "}
                          Status
                        </Text>
                      </Descriptions.Item>
                      <Descriptions.Item>
                        <Text keyboard className="labels">
                          {" "}
                          Reg Date
                        </Text>
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>
                <Col span={16}>
                  <Card
                    className="complaint"
                    title="Complaint Description"
                    bordered={false}
                  >
                    <TextArea
                      showCount
                      maxLength={100}
                      style={{
                        height: 180,
                      }}
                      onChange={onChange}
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
                  <Card className="vitalscards" title="Vitals" bordered={true}>
                    <Table
                      className="vitals"
                      dataSource={dataSource}
                      columns={columns}
                      pagination={false}
                    />
                  </Card>
                </Col>

                <Col span={16}>
                  <Card className="cards" title="Symptoms" bordered={true}>
                    <Checkbox.Group
                      style={{
                        width: "100%",
                      }}
                      onChange={onChecked}
                    >
                      <Row>
                        <Col span={8}>
                          <Checkbox value="fever">Fever</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="dryeyes">Dry Eyes</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="palpitations">Palpitations</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="blood_in_stool">
                            Blood in stool/black stools
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="back_pain">Lower back pain</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="rash">rash</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="sneezing">Sneezing</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="stomach_pain">Stomach pain</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="diziness">Diziness</Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="vomiting">Vomiting</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="red_eyes">Red Eyes</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="Chest_pain">
                            Chest pain/tightness
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="dysphagia">Dysphagia</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="joint_swelling">
                            Joint swelling
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="fatigue">Fatigue</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="nose_bleeds">Nose bleeds</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="orthopnea">Orthopnea</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="urgency">Urgency</Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="oral_ulcers">Oral ulcers</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="numbness">
                            Numbness and tingling
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="hoarseness">Hoarseness</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="constipation">Constipation</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="joint_stiffness">
                            Joint stiffness
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="appetite">Loss of appetite</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="vertigo">Vertigo</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="Texercise">
                            Trouble with exercise
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="dysuri">Dysuria</Checkbox>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="headach">Headach</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="nausea">Nausea</Checkbox>
                        </Col>

                        <Col span={8}>
                          <Checkbox value="Diarrhea">Diarrhea</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="joint_redness">
                            Joint redness/warmth
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="weight_loss">Weight loss</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="ear_pain">Ear pain</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="breathing_difficulty">Breathing difficulty</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="polyuria">Polyuria</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="anxiety">Anxiety</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="dry_mouth">Dry mouth</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="muscle_pain">Muscle pain</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="joint_pain">Joint pain</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="sweating">Sweating</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="watery_eyes">Watery eyes</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="wheeze">Wheeze</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="color_urine">Color of urine</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="insomnia">Sleep distbance</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="skin_itching">Skin itching</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="heart_burn">Heart burn</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="swollen_nodes">Swollen lymph nodes</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="chills">Chills</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="itching_eyes">itching_eyes</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="cough">Cough</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="incontinence">Incontinence</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="depression">Depression</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="bruises">Bruises</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="sinus">Sinus pressure</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="tiredness">Tiredness</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="sore_throat">Sore throat</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="others">Others</Checkbox>
                        </Col>
                      </Row>

                      <Col span={24}>
                        <TextArea
                          className="sumptomstext"
                          placeholder="any other symptoms please specify"
                          showCount
                          maxLength={100}
                          style={{
                            height: 80,
                          }}
                          onChange={onChange}
                        />
                      </Col>
                    </Checkbox.Group>
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
                  <Card className="alergycard" title="Alergies" bordered={true}>
                    <Select
                      className="alergytype"
                      defaultValue="Alergy types"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                    >
                      <Option value="Drug Allergy">Drug Allergy</Option>
                      <Option value="Food Allergy">Food Allergy</Option>
                      <Option value="Insect Allergy">Insect Allergy</Option>
                      <Option value="Mold Allergy">Mold Allergy</Option>
                      <Option value="Pet Allergy">Pet Allergy</Option>
                      <Option value="Pollen Allergy">Pollen Allergy</Option>
                    </Select>

                    <Select
                      className="severity"
                      defaultValue="Severity"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                    >
                      <Option value="Normal"> 1</Option>
                      <Option value="mediocre "> 2</Option>
                      <Option value="Severe">3</Option>
                    </Select>
                    <Input
                      className="alergyDescription"
                      placeholder="Description"
                    />
                    <Button className="alergybtn" type="primary">
                      ADD
                    </Button>
                  </Card>
                </Col>

                <Col span={16}>
                  <Card
                    className="prescription_cards"
                    title="Prescription"
                    bordered={true}
                  >
                    {/* <Button type="default" onClick={addPresciption()}>
                      ADD
                    </Button> */}
                    <Table
                      pagination={false}
                      columns={columns2}
                      dataSource={dataSource2}
                    ></Table>
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
          </div>
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
export default Diagnosis;
