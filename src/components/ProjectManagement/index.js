import React from 'react';
import { Layout, Card, Button, Menu, Dropdown, Row, Col, Tag, List } from 'antd';
import { DownOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './index.css';

const { Content, Sider } = Layout;

const ProjectManagement = () => {
  const companies = [
    {
      key: 'xxxx公司',
      name: 'xxxx公司',
      children: [
        { key: '20220926', name: '产品名称20220926' },
        { key: '20220816', name: '产品名称20220816' }
      ]
    },
    { key: 'mmmm公司', name: 'mmmm公司' },
    { key: 'hhhh公司', name: 'hhhh公司' }
  ];

  const testTasks = [
    { id: 'XXXXXX', name: 'XXX的体验测试', status: '已发布', answers: 200 },
    { id: 'XXXXXX', name: 'XXX的体验测试', status: '已发布', answers: 200 },
  ];

  const projectReports = [
    '项目报告1XXXX', '项目报告2XXXX', '项目报告3XXXX',
    '项目报告4XXXX', '项目报告5XXXX', '项目报告6XXXX'
  ];

  const operationMenu = (
    <Menu>
      <Menu.Item key="1">分析下载</Menu.Item>
      <Menu.Item key="2">停止</Menu.Item>
      <Menu.Item key="3">复制</Menu.Item>
      <Menu.Item key="4">分享问卷链接</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="project-management">
      <div className="page-header">
        <ArrowLeftOutlined />
        <span>项目详情</span>
        <Button type="primary">修改</Button>
      </div>

      <Layout className="main-content">
        <Sider width={200} className="project-sider">
          <div className="sider-header">分类</div>
          <Menu mode="inline" defaultSelectedKeys={['xxxx公司']}>
            {companies.map(company => (
              <Menu.SubMenu key={company.key} title={company.name}>
                {company.children?.map(product => (
                  <Menu.Item key={product.key}>{product.name}</Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu>
          <Button type="primary" block className="new-btn">新建</Button>
        </Sider>

        <Content className="project-content">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="基本信息" className="info-card">
                <p>企业名称：XXX企业</p>
                <p>企业ID：</p>
                <p>产品名称：</p>
                <p>产品类型：</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="项目信息" className="info-card">
                <p>项目时间：</p>
                <p>项目报价：</p>
                <p>项目负责人：</p>
                <p>项目进程：</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="客户需求" className="info-card">
                <p>预期测试周期：</p>
                <p>测试任务：</p>
                <p>特殊要求：</p>
              </Card>
            </Col>
          </Row>

          <Card 
            title="测试任务" 
            className="task-card"
            extra={
              <div>
                <Button type="primary" style={{ marginRight: '10px' }}>添加测试</Button>
                <Dropdown overlay={operationMenu}>
                  <Button>
                    操作 <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            }
          >
            <List
              dataSource={testTasks}
              renderItem={task => (
                <List.Item
                  actions={[
                    <Tag color="green">{task.status}</Tag>,
                    <span>答卷：{task.answers}</span>
                  ]}
                >
                  <List.Item.Meta
                    title={task.name}
                    description={`ID: ${task.id}`}
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card 
            title="项目成果" 
            className="result-card"
            extra={<Button type="primary">插入链接</Button>}
          >
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={projectReports}
              renderItem={report => (
                <List.Item>
                  {report}
                </List.Item>
              )}
            />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProjectManagement;