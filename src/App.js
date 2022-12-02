import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Menu } from 'antd';

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
      <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1, marginBottom: '20px'}}>
        <Menu onClick={onTabClick} selectedKeys={[currentTab]} mode="vertical" items={menus} className="menu dev-border" />
        <div className='main dev-border'>
          {currentTab === 'homepage' &&
            <div>
              <div>主页</div>
              <div style={{display: 'flex', flexDireaction: 'row', alignItems: 'center', justifyContent: 'center'}}>
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
        </div>
      </div>
    </div>
  );
}

export default App;
