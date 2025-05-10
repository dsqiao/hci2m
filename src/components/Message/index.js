import React, { useState } from 'react';
import { Layout, List, Input, Button, Avatar } from 'antd';
import { SmileOutlined, FolderOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './index.css';

const { Sider, Content } = Layout;
const { TextArea } = Input;

const Message = () => {
  const [selectedCompany, setSelectedCompany] = useState('XXXX公司');
  const [messageText, setMessageText] = useState('');

  const messageList = [
    {
      company: 'XXXX公司',
      message: '你好！修改申请已提交',
      time: '2022-10-11',
    },
    {
      company: 'XXXX公司',
      message: '你好！修改申请已提交',
      time: '2022-10-11',
    },
  ];

  const chatMessages = [
    {
      type: 'received',
      content: '你好！修改申请已提交',
      time: '2022-10-11'
    },
    {
      type: 'sent',
      content: 'xxxxxx',
      time: '2022-10-11'
    }
  ];

  const handleSend = () => {
    if (messageText.trim()) {
      // Handle send message
      setMessageText('');
    }
  };

  return (
    <Layout className="message-center">
      <Sider width={250} className="message-sider">
        <div className="sider-header">消息列表</div>
        <List
          className="message-list"
          dataSource={messageList}
          renderItem={(item) => (
            <List.Item 
              className="message-item"
              onClick={() => setSelectedCompany(item.company)}
            >
              <List.Item.Meta
                title={item.company}
                description={item.message}
              />
              <div className="message-time">{item.time}</div>
            </List.Item>
          )}
        />
      </Sider>
      
      <Content className="chat-content">
        
        <div className="chat-header">
          <ArrowLeftOutlined className="back-icon" />
          <span>{selectedCompany}</span>
        </div>
        
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div 
              key={index} 
              className={`message-bubble ${msg.type}`}
            >
              <div className="message-content">{msg.content}</div>
              <div className="message-time">{msg.time}</div>
            </div>
          ))}
        </div>
        
        <div className="chat-input">
          <div className="input-toolbar">
            <SmileOutlined className="toolbar-icon" />
            <FolderOutlined className="toolbar-icon" />
          </div>
          <div className="input-area">
            <TextArea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="请输入消息"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
            <Button 
              type="primary" 
              className="send-button"
              onClick={handleSend}
            >
              发送
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Message;