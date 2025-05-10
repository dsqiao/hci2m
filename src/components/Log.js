import React from 'react';
import { Select, Input, DatePicker, Button, Table } from 'antd';

const Log = ({ columns, data }) => {
  return (
    <div>
      <div className='sub-title' style={{ marginBottom: '20px' }}>操作日志</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <Select 
              placeholder={'用户ID/名称'} 
              style={{ width: '180px' }} 
              showArrow={false} 
              notFoundContent={null} 
            />
            <Input 
              placeholder='单行输入' 
              style={{ width: '320px' }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <Select 
              defaultValue={'and'} 
              style={{ width: '180px' }} 
              options={[
                { value: 'and', label: 'and' },
                { value: 'or', label: 'or' },
                { value: 'not', label: 'not' }
              ]} 
            />
            <Select 
              placeholder={'角色'} 
              style={{ width: '320px' }} 
              options={[
                { value: '超级管理员', label: '超级管理员' },
                { value: '运营', label: '运营' },
                { value: '销售', label: '销售' },
              ]} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <Select 
              defaultValue={'and'} 
              style={{ width: '180px' }} 
              options={[
                { value: 'and', label: 'and' },
                { value: 'or', label: 'or' },
                { value: 'not', label: 'not' }
              ]} 
            />
            <Select 
              placeholder={'操作类型'} 
              style={{ width: '320px' }} 
              options={[
                { value: '', label: '' },
              ]} 
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <DatePicker.RangePicker style={{ width: '100%' }} />
          <Button type="primary">查询</Button>
        </div>
      </div>
      <Table 
        dataSource={data} 
        columns={columns} 
        style={{ marginTop: '20px' }} 
      />
    </div>
  );
};

export default Log;