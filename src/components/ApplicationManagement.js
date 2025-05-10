import React from 'react';
import { Select, Input, Button, DatePicker } from 'antd';

const ApplicationManagement = () => {
  return (
    <div>
      <div className='sub-title' style={{ marginBottom: '20px' }}>申请查询</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* 第一行 */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Select 
            placeholder="公司名称" 
            style={{ width: '180px' }} 
          />
          <Input 
            placeholder="单行输入" 
            style={{ width: '320px' }} 
          />
        </div>

        {/* 第二行 */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Select 
            defaultValue="并且" 
            style={{ width: '180px' }} 
            options={[
              { value: '并且', label: '并且' },
              { value: '或者', label: '或者' },
            ]}
          />
          <Select 
            placeholder="公司名称" 
            style={{ width: '180px' }} 
          />
          <Input 
            placeholder="单行输入" 
            style={{ width: '320px' }} 
          />
        </div>

        {/* 按钮行 */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Button type="primary">添加行</Button>
          <Button>添加日期范围</Button>
        </div>
      </div>

      {/* 查询按钮 */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button type="primary" style={{ width: '120px' }}>查询</Button>
      </div>
    </div>
  );
};

export default ApplicationManagement;