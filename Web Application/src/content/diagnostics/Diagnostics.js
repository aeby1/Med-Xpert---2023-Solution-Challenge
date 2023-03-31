import "../../content/diagnostics/Diagnostics.css";

import { Button, Layout,  Tabs, Table } from "antd";

import React, { useState } from "react";
const { Content, Footer } = Layout;
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};
//table2



//tableData
const columns = [
  {
    title: "Date",
    dataIndex: "date",

  },
  {
    title: "Test name",
    dataIndex: "Tname",
  },

  {
    title: "Department",
    dataIndex: "dept",
  },
  {
    title: "Doctor",
    dataIndex: "doc",
  },
  {
    title: "time",
    dataIndex: "time",
  },
];
const data = [];



for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    date: i,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const options = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

const PatientDashboard = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  //modal
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
            <Tabs type="line" defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="Labrotary" key="1">
                <div
                  className="report-background"
                >
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    Reload
                  </Button>
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </TabPane>
              <TabPane tab="Radiology" key="2">
                <div
                  className="report-background"
                >
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    Reload
                  </Button>
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </TabPane>
              <TabPane tab="Cardiology" key="3">
                <div
                  className="report-background"
                >
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    Reload
                  </Button>
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </TabPane>
              <TabPane tab="Neurology" key="4">
                <div
                  className="report-background"
                >
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </TabPane>
              <TabPane tab="Endo/Broncho" key="5">
                <div
                  className="report-background"
                >
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    Reload
                  </Button>
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </TabPane>
              <TabPane tab="Audiogram" key="6">
                <div
                  className="report-background"
                >
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    Reload
                  </Button>
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </TabPane>
              <TabPane tab="Flow sheets" key="7">
                <div
                  className="report-background"
                >
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    Reload
                  </Button>
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </TabPane>
            </Tabs>
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
export default PatientDashboard;
