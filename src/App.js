import React from 'react';
import './App.css';
import MarkdownDemo from "./page/MarkdowDemo";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Content } = Layout;

function App() {
  return (
      <div>
          <MarkdownDemo />
      </div>

  );
}

export default App;
