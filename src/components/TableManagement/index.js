import React from 'react';
import { Layout, Menu, Button, Table, Card, Row, Col, Form, Input, Space } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import './index.css';

const { Sider, Content } = Layout;

const TableManagement = () => {
  const companies = [
    {
      key: 'xxxx公司',
      label: 'xxxx公司',
      children: [
        { key: '20220926', label: '产品名称20220926' },
        { key: '20220816', label: '产品名称20220816' },
      ],
    },
    { key: 'mmmm公司', label: 'mmmm公司' },
    { key: 'hhhh公司', label: 'hhhh公司' },
  ];

  const columns = [
    {
      title: '具体条目',
      dataIndex: 'item',
      key: 'item',
      width: '100px',
      align: 'center',
    },
    {
      title: '条目内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '评分方式',
      dataIndex: 'scoring',
      key: 'scoring',
      width: '200px',
    },
  ];

  const data = [
    { key: '1', item: '1', content: '', scoring: '' },
    { key: '2', item: '2', content: '', scoring: '' },
    { key: '3', item: '3', content: '', scoring: '' },
    { key: '4', item: '4', content: '', scoring: '' },
  ];

  return (
    <Layout className="table-management">
      <Sider width={250} className="table-sider">
        <div className="sider-header">分类</div>
        <Menu
          mode="inline"
          items={companies}
          defaultSelectedKeys={['xxxx公司']}
          defaultOpenKeys={['xxxx公司']}
        />
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          className="new-button"
        >
          新建
        </Button>
      </Sider>
      
      <Content className="table-content">
        <Card
          title="量表详情"
          extra={
            <Button type="primary" icon={<EditOutlined />}>
              修改
            </Button>
          }
          bordered={false}
        >
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form layout="vertical">
                <Form.Item label="量表名称">
                  <Input disabled />
                </Form.Item>
                <Form.Item label="量表类型">
                  <Input disabled />
                </Form.Item>
                <Form.Item label="测量维度">
                  <Input disabled />
                </Form.Item>
              </Form>
            </Col>
            <Col span={8}>
              <Form layout="vertical">
                <Form.Item label="信度系数">
                  <Input disabled />
                </Form.Item>
                <Form.Item label="条目数">
                  <Input disabled />
                </Form.Item>
                <Form.Item label="测试时长">
                  <Input disabled />
                </Form.Item>
              </Form>
            </Col>
          </Row>

          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="items-table"
            bordered
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default TableManagement;