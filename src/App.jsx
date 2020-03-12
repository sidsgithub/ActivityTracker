import React from 'react';
import { Layout } from 'antd';

import './app.scss';

const { Content } = Layout;

const App = ({ children }) => {
  return (
    <div>
      <Layout>
        <Content>
          <div style={{ background: '#fff', padding: 20 }}>{children}</div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
