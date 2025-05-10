import React, { useState } from 'react';
import { Menu } from 'antd';
import Homepage from './components/Homepage';
import Log from './components/Log';
import ApplicationManagement from './components/ApplicationManagement';
import ProjectManagement from './components/ProjectManagement';
import TableManagement from './components/TableManagement';
import EnterpriseManagement from './components/EnterpriseManagement';
import Message from './components/Message';
import './App.css';
import { ConfigProvider, theme } from 'antd';

function App() {
  const menus = [
    { label: '主页', key: 'homepage' },
    { label: '操作日志', key: 'log' },
    { label: '申请管理', key: 'applicationManagement' },
    { label: '项目管理', key: 'projectManagement' },
    { label: '量表管理', key: 'tableManagement' },
    { label: '企业管理', key: 'enterpriseManagement' },
    { label: '我的消息', key: 'message' },
  ];

  const columns = [
    { title: '编号', dataIndex: 'index', key: 'index' },
    { title: '用户名', dataIndex: 'userName', key: 'userName' },
    { title: '用户 ID', dataIndex: 'userId', key: 'userId' },
    { title: '角色类型', dataIndex: 'userType', key: 'userType' },
    { title: '操作类型', dataIndex: 'operationType', key: 'operationType' },
    { title: '操作时间', dataIndex: 'operationTime', key: 'operationTime' },
    { title: '操作内容', dataIndex: 'operationContent', key: 'operationContent' },
  ];

  const data = []; // Example data

  const [currentTab, setCurrentTab] = useState('homepage');
  const onTabClick = (e) => setCurrentTab(e.key);

  const renderContent = () => {
    switch (currentTab) {
      case 'homepage':
        return <Homepage />;
      case 'log':
        return <Log columns={columns} data={data} />;
      case 'applicationManagement':
        return <ApplicationManagement />;
      case 'projectManagement':
        return <ProjectManagement />;
      case 'tableManagement':
        return <TableManagement />;
      case 'enterpriseManagement':
        return <EnterpriseManagement />;
      case 'message':
        return <Message />;
      default:
        return null;
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm // 使用默认浅色主题
      }}
    >
      <div className="App">
        <header className="App-header dev-border">
          <image></image>
          <div>XX 系统</div>
          <div>{'2022/9/28 16:48'}</div>
          <image>avator</image>
          <div>{'管理员昵称'}</div>
        </header>
        <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, marginBottom: '20px' }}>
          <Menu onClick={onTabClick} selectedKeys={[currentTab]} mode="vertical" items={menus} className="menu dev-border" />
          <div className='main dev-border'>
            {renderContent()}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;