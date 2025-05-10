import React, { useState } from 'react';
import { Layout, Menu, Button, Form, Input, Table, Card } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './index.css';

const { Sider, Content } = Layout;

const EnterpriseManagement = () => {
  const [selectedCompany, setSelectedCompany] = useState('xxxx公司');

  const companies = [
    {
      key: 'xxxx公司',
      name: 'xxxx公司',
      children: [
        { key: '20220926', name: '产品名称20220926' },
        { key: '20220816', name: '产品名称20220816' }
      ]
    },
    {
      key: 'mmmm公司',
      name: 'mmmm公司',
      children: []
    },
    {
      key: 'hhhh公司',
      name: 'hhhh公司',
      children: []
    }
  ];

  const columns = [
    { title: '委托项目', dataIndex: 'project', key: 'project' },
    { title: '项目名称', dataIndex: 'name', key: 'name' },
    { title: '项目时间', dataIndex: 'time', key: 'time' },
    { title: '项目报价', dataIndex: 'price', key: 'price' },
    { title: '项目负责人', dataIndex: 'manager', key: 'manager' },
    { title: '联系方式', dataIndex: 'contact', key: 'contact' },
  ];

  const tableData = [
    {
      key: '1',
      project: '',
      name: '项目1名称',
      time: '',
      price: '',
      manager: '',
      contact: ''
    },
    {
      key: '2',
      project: '',
      name: '项目2名称',
      time: '',
      price: '',
      manager: '',
      contact: ''
    }
  ];

  const renderMenuItem = (item) => {
    if (item.children && item.children.length > 0) {
      return (
        <Menu.SubMenu 
          key={item.key} 
          title={item.name}
          icon={<CaretRightOutlined />}
        >
          {item.children.map(child => (
            <Menu.Item key={child.key}>{child.name}</Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
  };

  return (
    <Layout className="enterprise-management">
      <Sider width={250} className="enterprise-sider">
        <div className="sider-header">分类</div>
        <Menu
          mode="inline"
          selectedKeys={[selectedCompany]}
          onSelect={({key}) => setSelectedCompany(key)}
        >
          {companies.map(renderMenuItem)}
        </Menu>
        <Button type="primary" className="add-btn">
          新建
        </Button>
      </Sider>
      
      <Content className="enterprise-content">
        <Card>
          <div className="content-header">
            <span>企业详情</span>
            <Button type="primary">修改</Button>
          </div>
          
          <Form layout="vertical">
            <Form.Item label="企业名称:">
              <Input placeholder="请输入企业名称" />
            </Form.Item>
            <Form.Item label="企业 ID:">
              <Input placeholder="请输入企业ID" />
            </Form.Item>
            <Form.Item label="企业简介:">
              <Input.TextArea placeholder="请输入企业简介" />
            </Form.Item>
            <Form.Item label="外部联系方式:">
              <Input placeholder="请输入联系方式" />
            </Form.Item>
          </Form>

          <Table 
            columns={columns} 
            dataSource={tableData} 
            className="project-table"
            pagination={false}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default EnterpriseManagement;