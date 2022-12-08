import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Menu, Select, Input, DatePicker, Button, Table } from 'antd';

function App() {

  const menus = [
    {
      label: '主页',
      key: 'homepage'
    }, {
      label: '操作日志',
      key: 'log'
    }, {
      label: '申请管理',
      key: 'applicationManagement'
    }, {
      label: '项目管理',
      key: 'projectManagement',
    }, {
      label: '量表管理',
      key: 'tableManagement',
    }, {
      label: '企业管理',
      key: 'enterpriseManagement'
    }, {
      label: '我的消息',
      key: 'message'
    }
  ]
  const columns = [
    {
      title: '编号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '用户 ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '角色类型',
      dataIndex: 'userType',
      key: 'userType',
    },
    {
      title: '操作类型',
      dataIndex: 'operationType',
      key: 'operationType',
    },
    {
      title: '操作时间',
      dataIndex: 'operationTime',
      key: 'operationTime',
    },
    {
      title: '操作内容',
      dataIndex: 'operationContent',
      key: 'operationContent',
    }
  ]
  const data = [
    // {
    //   index: '5',
    //   userName: 'dsqiao',
    //   userId: '001'
    // }
  ]
  const [currentTab, setCurrentTab] = useState('homepage')
  const onTabClick = (e) => {
    setCurrentTab(e.key)
  }
  const time = '2022/9/28 16:48'
  const name = '管理员昵称'
  return (
    <div className="App">
      <header className="App-header dev-border">
        <image></image>
        <div>XX 系统</div>
        <div>{time}</div>
        <image>avator</image>
        <div>{name}</div>
      </header>
      <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, marginBottom: '20px' }}>
        <Menu onClick={onTabClick} selectedKeys={[currentTab]} mode="vertical" items={menus} className="menu dev-border" />
        <div className='main dev-border'>
          {currentTab === 'homepage' &&
            <div>
              <div className='sub-title'>主页</div>
              <div style={{ display: 'flex', flexDireaction: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <div className='box'>
                  <div>待处理申请数</div>
                  <div>99</div>
                </div>
                <div className='box'>
                  <div>待处理项目数</div>
                  <div>99</div>
                </div>
                <div className='box'>
                  <div>未读信息数</div>
                  <div>99</div>
                </div>
              </div>
            </div>
          }
          {
            currentTab === 'log' &&
            <div>
              <div className='sub-title'>操作日志</div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Select placeholder={'用户ID/名称'} style={{ width: '180px' }} showArrow={false} notFoundContent={null} />
                    <Input placeholder='单行输入' style={{ width: '320px' }} />
                  </div>
                  <Select defaultValue={'and'} style={{ width: '180px' }} options={[
                    { value: 'and', label: 'and' },
                    { value: 'or', label: 'or' },
                    { value: 'not', label: 'not' }
                  ]} />
                  <Select placeholder={'角色'} style={{ width: '320px' }} options={[
                    { value: '超级管理员', label: '超级管理员' },
                    { value: '运营', label: '运营' },
                    { value: '销售', label: '销售' },
                  ]} />
                  <br />
                  <Select defaultValue={'and'} style={{ width: '180px' }} options={[
                    { value: 'and', label: 'and' },
                    { value: 'or', label: 'or' },
                    { value: 'not', label: 'not' }
                  ]} />
                  <Select placeholder={'操作类型'} style={{ width: '320px' }} options={[
                    { value: '', label: '' },
                  ]} />
                </div>
                <div>
                  <DatePicker.RangePicker></DatePicker.RangePicker>
                  <br/>
                  <Button>查询</Button>
                </div>
              </div>

              <Table dataSource={data} columns={columns}></Table>
            </div>
          }

          {
            currentTab === 'applicationManagement' &&
            <div>
              <div className='sub-title'>申请管理</div>
            </div>
          }
          {
            currentTab === 'projectManagement' &&
            <div>
              <div className='sub-title'>项目管理</div>
            </div>
          }
          {
            currentTab === 'tableManagement' &&
            <div>
              <div className='sub-title'>量表管理</div>
            </div>
          }
          {
            currentTab === 'enterpriseManagement' &&
            <div>
              <div className='sub-title'>企业管理</div>
            </div>
          }
          {
            currentTab === 'message' &&
            <div>
              <div className='sub-title'>我的消息</div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
