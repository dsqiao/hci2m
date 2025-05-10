import React from 'react';
// 主页
const Homepage = () => {
  return (
    <div>
      <div className='sub-title'>主页</div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
  );
};

export default Homepage;